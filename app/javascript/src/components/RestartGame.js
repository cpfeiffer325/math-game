import React from 'react'

import RestartGameButton from './RestartGameButton'

export default function RestartGame({ 
  createMatch: createMatch,
  game: game,
  player: player,
}) {

  const restartGame = () => {
    console.log('Lets restart this game!');
    createMatch(game.id, player.id)
  }

  return (
    <RestartGameButton type={"green"} onRestart={restartGame}/>
  )
}
