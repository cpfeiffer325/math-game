import React, { useState } from 'react'
import axios from 'axios'

import GameGrid from './GameGrid'
import NewGameButton from './NewGameButton'
import NewPlayer from './NewPlayer'
import StartGameButton from './StartGameButton'
import Timer from './Timer'

import createApplicationData from '../hooks/createApplicationData'

export default function Game() {
  const {
    saveNewPlayer
  } = createApplicationData()

  const [state, setState] = useState({
    player: "",
  })

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
      <NewPlayer saveNewPlayer={saveNewPlayer}/>
    </div>
  )
}
