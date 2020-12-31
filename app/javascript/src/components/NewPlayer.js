import React from 'react'
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

export default function NewPlayer() {
  const [state, dispatch] = React.useReducer(reducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Tiny
      </Button>

      <Modal
        show={true}
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>What is your player name?</Modal.Header>
        <Modal.Content>
          <Input/>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Create Player
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}
