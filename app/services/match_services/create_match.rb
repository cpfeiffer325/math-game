module MatchServices
  class CreateMatch
    attr_reader :player, :game

    def initialize(player:, game:)
      @player = player
      @game = game
    end

    def call
      Match.create(
        player_id: player.id,
        game_id: game.id,
        column_values: generate_values,
        row_values: generate_values,
      )
    end

    private

    def min_value
      game.min_value
    end

    def max_value
      game.max_value
    end

    def grid_size
      game.grid_size
    end

    def generate_values
      (min_value...max_value).sort_by { rand }.slice(0, grid_size)
    end
  end
end
