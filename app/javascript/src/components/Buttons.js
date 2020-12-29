import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Game() {
  return (
    <div style={{ margin: "20px" }}>
      <Button primary>New Game</Button>
      <Button secondary>Start Game</Button>
    </div>
  )
}
