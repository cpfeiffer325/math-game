export function getDifficulties(games) {
  return [...new Set(games.map(g => g.attributes.difficulty))]
}

export function getGameTypes(games) {
  return [...new Set(games.map(g => g.attributes.game_type))]
}
