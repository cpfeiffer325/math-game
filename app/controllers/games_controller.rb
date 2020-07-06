class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    col = (2...10).sort_by{rand}.slice(0,5)
    row = (2...10).sort_by{rand}.slice(0,5)

    @game = Game.new(game_params.merge({ column_values: col, row_values: row }))
    @game.save
    redirect_to @game
  end

  def show
    @game = Game.find(params[:id])
  end

  private

  def game_params
    params.require(:game).permit(
      :player_name,
      :game_type,
      :column_values,
      :row_values,
    )
  end
end
