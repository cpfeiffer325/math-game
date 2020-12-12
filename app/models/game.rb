class Game < ApplicationRecord
  has_many :matches

  enum difficulty: {
    easy: 0,
    medium: 1,
    hard: 2
  }

  enum operator: {
    addition: 0,
    division: 1,
    multiplication: 2,
    subtraction: 3
  }
  
end
