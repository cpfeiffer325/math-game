module Api
  module V1
    class MatchesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        matches = Match.where(game_id: params[:game_id])

        render json: MatchSerializer.new(matches).serialized_json
      end

      def create
        game = Game.find(params[:game_id])
        player = Player.find(params[:player_id])
        match_service = MatchServices::CreateMatch.new(game: game, player: player)
        match = match_service.call

        if match
          render json: MatchSerializer.new(match).serialized_json
        else
          render json: { error: match.errors.messages }, status: 422
        end
      end
      
      def show
        match = Match.find(params[:id])
        
        render json: MatchSerializer.new(match).serialized_json
      end

      def update
        match = Match.find(params[:id])

        if match.update(match_params(update_params))
          render json: MatchSerializer.new(match).serialized_json
        else
          render json: { error: match.errors.messages }, status: 422
        end
      end

      def destroy
        match = Match.find(params[:id])

        if match.destroy
          head :no_content
        else
          render json: { error: match.errors.messages }, status: 422
        end
      end

      private

      def match_params(*permitted_params)
        params.require(:match).permit(permitted_params)
      end

      def create_params
        [
          :game_id,
          :player_id
        ]
      end

      def update_params
        [
          :duration,
        ]
      end
    end
  end
end

