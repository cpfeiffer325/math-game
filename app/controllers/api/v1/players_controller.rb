module Api
  module V1
    class PlayersController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        players = Player.all

        render json: PlayerSerializer.new(players).serialized_json
      end

      def create
        player = Player.new(player_params)

        if player.save
          render json: PlayerSerializer.new(player).serialized_json
        else
          render json: { error: player.errors.messages }, status: 422
        end
      end

      def show
        player = Player.find(params[:id])

        render json: PlayerSerializer.new(player).serialized_json
      end

      private

      def player_params
        params.require(:player).permit(:name)
      end
    end
  end
end
