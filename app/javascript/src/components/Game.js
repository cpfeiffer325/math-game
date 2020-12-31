import React from 'react'

import GameGrid from './GameGrid'
import NewGameButton from './NewGameButton'
import NewPlayer from './NewPlayer'
import StartGameButton from './StartGameButton'
import Timer from './Timer'

export default function Game() {
  const newGame = () => {
    console.log('Lets start a new game!');
  }

  const startGame = () => {
    console.log('Lets start this game!');
  }

  return (
    <div style={{ margin: "20px" }}>
      <Timer/>
      <GameGrid/>
      <div style={{ margin: "20px" }}>
        <NewGameButton type={"primary"} onNew={newGame}/>
        <StartGameButton type={"secondary"} onStart={startGame}/>
      </div>
      <NewPlayer />
    </div>
  )
}
