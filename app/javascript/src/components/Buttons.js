import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Buttons({ onClick }) {
  return (
    <div style={{ margin: "20px" }}>
      <Button primary onClick={onClick} >New Game</Button>
      <Button secondary onClick={onClick} >Start Game</Button>
    </div>
  )
}
