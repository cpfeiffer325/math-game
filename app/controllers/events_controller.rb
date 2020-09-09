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
    @highscores = filter_highscore_events(@game.events)
    @last_game = Game.last.id
  end

  def update
    @event = Event.find(params[:id])
    @event.game_time = Time.now - @event.created_at
    @event.save
  end

  private

  def filter_highscore_events(events)
    completed_games = events.select { |event| event.game_time != nil }
    highscores = completed_games.sort_by { |event| event[:game_time] }
    highscores
  end
end
