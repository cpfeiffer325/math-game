import React, { useState } from 'react'
import { Dropdown, Grid, Header, Input } from 'semantic-ui-react'

import StartGameButton from './StartGameButton'

export default function GameDetails ({
  completeMatch: completeMatch,
  createMatch: createMatch,
  createPlayer: createPlayer,
  gameId: propGameId,
  games: games,
  isCreating: isCreating,
  name: propName,
  player: propPlayer
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
  const [name, setName] = useState(propName || "")
  const [player, setPlayer] = useState(propPlayer || null)
  
  const startGame = () => {
    if (isCreating) { // add promise resolve to hopefully fix this
      const newPlayer = createPlayer(name)
      setPlayer(newPlayer)
    } else {
      console.log('Lets start this game!');
      createMatch(gameId, player.id)
      console.log('gameId :>> ', gameId);
      console.log('newPlayer.id :>> ', player.id);
    }
  }

  return (
    <Grid textAlign='center'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as='h3' textAlign='center'>
            Player Name
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
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
            onChange={(event, data) => setGameId(data.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <StartGameButton type={"green"} onStart={startGame} />
      </Grid.Row>
    </Grid>
  )
}

