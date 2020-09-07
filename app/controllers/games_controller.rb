class GamesController < ApplicationController
  def index
    @games = Game.all
    @player = session[:current_player]
  end
end
