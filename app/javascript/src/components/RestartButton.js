import React from 'react'

import Buttons from './Buttons'

export default function RestartButton({ type, onNew }) {
  return (
    <Buttons type={type} onClick={onNew}>Restart</Buttons>
  )
}
