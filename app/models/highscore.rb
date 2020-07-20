class Highscore < ApplicationRecord
  has_many :games
  has_many :players
end
