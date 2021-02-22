module Api
  module V1
    class GamesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        games = Game.all

        render json: GameSerializer.new(games).serialized_json
      end

      def create
        game = Game.new(game_params)

        if game.save
          render json: GameSerializer.new(game).serialized_json
        else
          render json: { error: game.errors.messages }, status: 422
        end
      end

      def show
        game = Game.find(params[:id])

        render json: GameSerializer.new(game).serialized_json
      end

      private

      def game_params
        params.require(:game).permit(
          :difficulty,
          :game_type,
          :grid_size,
          :max_value,
          :min_value,
          :operator
        )
      end
    end
  end
end
