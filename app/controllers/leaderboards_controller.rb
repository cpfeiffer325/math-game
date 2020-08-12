class LeaderboardsController < ApplicationController
  def show
    @game_id = params[:id]
    render json: filter_highscore_events
  end

  def filter_highscore_events
    @game = Game.find(@game_id)
    # if Event.all.length != 0
    events = Event.all.select { |e| e.game_id == @game.id && e.game_time != nil }
    events.sort_by { |event| event[:game_time] }
    events.map do |event|
      hash = event.attributes
      hash[:player] = Player.find(event.player_id).name  
      hash
    end
  end
end
