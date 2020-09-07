class EventsController < ApplicationController
  def create
    @game = Game.find(params[:game_id])
    @player = Player.find(session[:current_player]["id"])
    @event = Event.create!(game_id: @game.id, player_id: @player.id)
    
    redirect_to(game_event_path(@game, @event))
  end
  
  def show
    @event = Event.find(params[:id])
    @player = @event.player
    @game = @event.game
  end

  def update
    @event = Event.find(params[:id])
    @event.game_time = Time.now - @event.created_at
    @event.save
  end
end
