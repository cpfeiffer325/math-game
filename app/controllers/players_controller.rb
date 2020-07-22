class PlayersController < ApplicationController
  def new
  end

  def create
    @player = Player.new(player_params)
  end

  private

  def player_params
    params.require(:player).permit(
      :name
    )
  end
end
