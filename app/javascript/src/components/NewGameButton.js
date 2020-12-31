import React from 'react'

import Buttons from './Buttons'

export default function NewGameButton({ type, onNew }) {
  return (
    <Buttons type={type} onClick={onNew}>New Game</Buttons>
  )
}
