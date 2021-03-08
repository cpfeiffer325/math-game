import React from 'react'

import Buttons from './Buttons'

export default function StartGameButton({ type, onStart }) {
  return (
    <Buttons type={type} onClick={onStart}>Start Game</Buttons>
  )
}
