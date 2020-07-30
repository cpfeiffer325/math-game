class Game < ApplicationRecord
  def self.filter_highscore_events(game:)
    new(game: game)
  end

  def filter_highscore_events
    @game = Game.find(self.id)
    if Event.all.length != 0
      Event.all.select { |e| e.game_id == @game.id && e.game_time != nil }
    end
  end
end
