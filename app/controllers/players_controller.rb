class PlayersController < ApplicationController
  def new
  end

  def create
    @player = Player.create(player_params)
    session[:current_player] = @player
    redirect_to games_path
  end

  private

  def player_params
    params.require(:player).permit(
      :name
    )
  end
end
