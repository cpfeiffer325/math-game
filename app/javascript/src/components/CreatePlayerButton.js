import React from 'react'

import Buttons from './Buttons'

export default function CreatePlayerButton({ type, onCreate }) {
  return (
    <Buttons type={type} onClick={onCreate}>Create Player</Buttons>
  )
}
