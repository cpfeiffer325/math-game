class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params.merge(row_col_values))
    @game.save

    @player = Player.new(player_params)
    @player.save

    @event = Event.create(game_id: @game.id, player_id: @player.id)
    
    redirect_to(game_event_path(@game, @event))
  end
  
  private

  def row_col_values
    {
      column_values: random_values,
      row_values: random_values,
    }
  end

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
    params.permit(
      :player_id,
      :name
    )
  end
end
