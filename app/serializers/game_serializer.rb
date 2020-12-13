class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :game_type, :operator, :difficulty, :max_value, :min_value, :grid_size

  has_many :matches
end


