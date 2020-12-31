import React from 'react'
import NewGameButton from './NewGameButton'
import StartGameButton from './StartGameButton'
import GameGrid from './GameGrid'
import Timer from './Timer'

export default function Game() {
  const newGame = () => {
    
  }

  const startGame = () => {
    
  }

  return (
    <div style={{ margin: "20px" }}>
      <Timer/>
      <GameGrid/>
      <div style={{ margin: "20px" }}>
        <NewGameButton type={"primary"} onClick={newGame}/>
        <StartGameButton type={"secondary"} onClick={startGame}/>
      </div>
    </div>
  )
}
