class Game < ApplicationRecord
  def self.filter_highscore_events(game:)
    new(game: game)
  end

  def filter_highscore_events
    @game = Game.find(self.id)
    # if Event.all.length != 0
    events = Event.all.select { |e| e.game_id == @game.id && e.game_time != nil }
    events.sort_by { |event| event[:game_time] }
    # end
  end
end
