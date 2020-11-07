# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |game|
  Game.create!(
    game_type: "multiplication",
    difficulty: 1,
    column_values: (1...7).sort_by { rand }.slice(0, 5),
    row_values: (1...7).sort_by { rand }.slice(0, 5)
  )
end

20.times do |game|
  Game.create!(
    game_type: "multiplication",
    difficulty: 2,
    column_values: (2...11).sort_by { rand }.slice(0, 5),
    row_values: (2...11).sort_by { rand }.slice(0, 5)
  )
end

20.times do |game|
  Game.create!(
    game_type: "multiplication",
    difficulty: 3,
    column_values: (2...13).sort_by { rand }.slice(0, 5),
    row_values: (2...13).sort_by { rand }.slice(0, 5)
  )
end

20.times do |game|
  Game.create!(
    game_type: "addition",
    difficulty: 1,
    column_values: (2...11).sort_by { rand }.slice(0, 5),
    row_values: (2...11).sort_by { rand }.slice(0, 5)
  )
end

20.times do |game|
  Game.create!(
    game_type: "addition",
    difficulty: 2,
    column_values: (2...21).sort_by { rand }.slice(0, 5),
    row_values: (2...21).sort_by { rand }.slice(0, 5)
  )
end

20.times do |game|
  Game.create!(
    game_type: "addition",
    difficulty: 3,
    column_values: (2...51).sort_by { rand }.slice(0, 5),
    row_values: (2...51).sort_by { rand }.slice(0, 5)
  )
end
