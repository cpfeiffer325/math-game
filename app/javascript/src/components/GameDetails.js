import React, { useState } from 'react'
import { Dropdown, Grid, Header, Input } from 'semantic-ui-react'

import StartGameButton from './StartGameButton'

export default function GameDetails ({
  createMatch: createMatch,
  getMatches: getMatches,
  gameId: propGameId,
  games: games,
  player: player,
  getGame: getGame
}) {
  
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
  }
  
  const getGameDetails = (id) => {
    getGame(id)
  }
  
  const getGameMatches = (id) => {
    getMatches(id)
  }

  return (
    <Grid textAlign='center'>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Header as='h3' textAlign='center'>
            Game Type
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            fluid
            selection
            value={gameId}
            options={gameOptions}
            onChange={(event, data) => { setGameId(data.value); getGameMatches(data.value); getGameDetails(data.value) }}
            />
        </Grid.Column>
        <Grid.Column>
          <StartGameButton type={"green"} onStart={startGame} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

