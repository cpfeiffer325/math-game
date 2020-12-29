import React from 'react'
import Buttons from './Buttons'
import GameGrid from './GameGrid'
import Timer from './Timer'

export default function Game() {
  return (
    <div style={{ margin: "20px" }}>
      <Timer/>
      <GameGrid/>
      <Buttons/>
    </div>
  )
}
