class LeaderboardsController < ApplicationController
  def show
    @game_id = params[:id]
    render json: filter_highscore_events
  end

  def filter_highscore_events
    @game = Game.find(@game_id)
    events = @game.events.select { |event| event.game_time != nil }
    events.sort_by { |event| event[:game_time] }
    events.map do |event|
      hash = event.attributes
      hash[:player] = event.player.name  
      hash
    end
  end
end
