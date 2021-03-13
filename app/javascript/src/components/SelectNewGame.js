import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Modal } from 'semantic-ui-react'

import StartGameButton from './Buttons/StartGameButton'

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

export default function SelectNewGame({
  createMatch: createMatch,
  getMatches: getMatches,
  gameId: propGameId,
  game: game,
  games: games,
  player: player,
  getGame: getGame
}) {
  const [state, dispatch] = React.useReducer(reducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  useEffect(() => {
    if (Object.keys(player).length !== 0 && Object.keys(game).length === 0) {
      dispatch({ type: 'open', size: 'tiny' })
    }
  }, [])

  const formatOutputs = (game) => {
    const gameType = game.attributes.game_type.charAt(0).toUpperCase() + game.attributes.game_type.slice(1)
    return `${gameType} (${game.attributes.difficulty})`
  }

  const gameOptions = games.map((game) => (
    {
      key: game.id,
      text: formatOutputs(game),
      value: game.id
    }
  ))

  const [gameId, setGameId] = useState(propGameId || null)

  const startGame = () => {
    console.log('Lets start this game!');
    createMatch(gameId, player.id)
    dispatch({ type: 'close' })
  }

  const getGameDetails = (id) => {
    getGame(id)
  }

  const getGameMatches = (id) => {
    getMatches(id)
  }
  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })} color="violet">
        Select New Game
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Please Select a Game Type and Difficulty</Modal.Header>
        <Modal.Content autoComplete="off" onSubmit={event => event.preventDefault()}>
          <Dropdown
            fluid
            selection
            value={gameId}
            options={gameOptions}
            onChange={(event, data) => { setGameId(data.value); getGameMatches(data.value); getGameDetails(data.value) }}
          />
        </Modal.Content>
        <Modal.Actions>
          <StartGameButton type={"green"} onStart={startGame} />
        </Modal.Actions>
      </Modal>
    </>
  )
}
