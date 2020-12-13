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
    
      private
    
      def game_params
        params.require(:game).permit(
          :game_type,
          :operator,
          :difficulty,
          :max_value,
          :min_value,
          :grid_size
        )
      end
    end
  end
end

