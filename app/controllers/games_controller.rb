class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @col = random_values
    @row = random_values

    @game = Game.new(game_params.merge(
      { 
        column_values: @col, 
        row_values: @row 
      }
    ))
    @game.save
    redirect_to @game
  end

  def show
    @game = Game.find(params[:id])
    @player = Player.current
    # @stats = Stats.find(params[:id])
  end

  private

  def random_values
    (2...10).sort_by { rand }.slice(0, 5)
  end

  def game_params
    params.require(:game).permit(
      :game_type,
      :column_values,
      :row_values,
    )
  end
end
