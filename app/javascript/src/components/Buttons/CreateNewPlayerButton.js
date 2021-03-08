import React from 'react'

import Buttons from './Buttons'

export default function CreateNewPlayerButton({ type, onCreate }) {
  return (
    <Buttons type={type} onClick={onCreate}>Create Player</Buttons>
  )
}
