class Player < ApplicationRecord
  has_many :events
  has_many :games
end
