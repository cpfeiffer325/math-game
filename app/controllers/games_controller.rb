class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params.merge(row_col_values))
    @game.save

    @player = Player.new(player_params)
    @player.save
    redirect_to @game
  end
  
  def show
    # current_player = User.find_by_id(session[:current_player_id])
    @game = Game.find(params[:id])
    # @player = Player.find_by_id(current_player.id)
    @player = Player.last
    @event = Event.create(game_id: @game.id, player_id: @player.id)
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
      :name
    )
  end
end
