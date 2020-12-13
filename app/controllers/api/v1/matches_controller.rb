module Api
  module V1
    class MatchesController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        match = Match.new(match_params)

        if match.save
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

        if match.update(match_params)
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

      def match_params
        params.require(:match).permit(
          :duration,
          :game_id,
          :player_id,
          :column_values,
          :row_values
        )
      end

      # def filter_highscore_events(events)
      #   completed_games = events.select { |event| event.game_time != nil }
      #   highscores = completed_games.sort_by { |event| event[:game_time] }
      #   highscores
      # end
    end
  end
end

