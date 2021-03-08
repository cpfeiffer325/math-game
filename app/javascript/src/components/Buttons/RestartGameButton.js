import React from 'react'

import Buttons from './Buttons'

export default function RestartGameButton({ type, onRestart }) {
  return (
    <Buttons type={type} onClick={onRestart}>Restart Game</Buttons>
  )
}
