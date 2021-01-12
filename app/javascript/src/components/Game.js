import React from 'react'

import GameGrid from './GameGrid'
import NewGameButton from './NewGameButton'

import Timer from './Timer'

// import useApplicationData from '../hooks/useApplicationData'

export default function Game({ state }) {
  console.log('state :>> ', state);
  const createNewGame = () => {
    console.log('Lets start a new game!');
  }

  return (
    <div style={{ margin: "20px" }}>
      <Timer/>
      <GameGrid/>
      <div style={{ margin: "20px" }}>
        <NewGameButton type={"primary"} onNew={createNewGame}/>
      </div>
    </div>
  )
}
