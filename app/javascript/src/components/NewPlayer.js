import React, { useEffect, useState } from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'

function reducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:  
      throw new Error('Unsupported action...')
  }
}

export default function NewPlayer({
  createPlayer = createPlayer,
  name: propName,
  player: player
}) {
  const [state, dispatch] = React.useReducer(reducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state
  const [name, setName] = useState(propName || "")

  const save = () => {
    createPlayer(name)
    dispatch({ type: 'close' })
  }

  useEffect(() => {
    if (Object.keys(player).length === 0) {
      dispatch({ type: 'open', size: 'tiny' })
    }
  }, [])

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Change Player Name
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Please Enter your player name?</Modal.Header>
        <Modal.Content autoComplete="off" onSubmit={event => event.preventDefault()}>
          <Input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={save} >
            Create Player
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}
