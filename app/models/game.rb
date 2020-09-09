class Game < ApplicationRecord
  has_many :events
  has_many :players
end
