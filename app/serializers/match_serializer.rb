class MatchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :duration, :game_id, :player_id, :column_values, :row_values

  belongs_to :game
  belongs_to :player
end
