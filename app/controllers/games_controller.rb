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

    @player = Player.new(player_params)
    @player.save

    @highscore = Highscore.new(game_id: @game.id)
    @highscore.save

    redirect_to @game
  end
  
  def show
    @game = Game.find(params[:id])
    @player = Player.last
    @event = Event.create(game_id: @game.id, player_id: @player.id)
    @highscore = Highscore.select { |h| h.game_id == @game.id }
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

  def player_params
    params.permit(:name)
  end
end
