Game.create!(
  game_type: "addition",
  operator: 0,
  difficulty: 0,
  max_value: 11,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "addition",
  operator: 0,
  difficulty: 1,
  max_value: 26,
  min_value: 5,
  grid_size: 5
)

Game.create!(
  game_type: "addition",
  operator: 0,
  difficulty: 2,
  max_value: 51,
  min_value: 10,
  grid_size: 5
)

Game.create!(
  game_type: "subtraction",
  operator: 3,
  difficulty: 0,
  max_value: 11,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "subtraction",
  operator: 3,
  difficulty: 1,
  max_value: 26,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "subtraction",
  operator: 3,
  difficulty: 2,
  max_value: 51,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "multiplication",
  operator: 2,
  difficulty: 0,
  max_value: 7,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "multiplication",
  operator: 2,
  difficulty: 1,
  max_value: 10,
  min_value: 1,
  grid_size: 5
)

Game.create!(
  game_type: "multiplication",
  operator: 2,
  difficulty: 2,
  max_value: 13,
  min_value: 1,
  grid_size: 5
)
