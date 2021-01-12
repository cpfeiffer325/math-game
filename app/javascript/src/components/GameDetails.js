import React, { useState } from 'react'
import { Dropdown, Grid, Header, Input } from 'semantic-ui-react'

import StartGameButton from './StartGameButton'

export default function GameDetails ({
  createMatch: createMatch,
  completeMatch: completeMatch,
  difficulty: propDifficulty,
  difficulties: difficulties,
  games: games,
  gameType: propGameType,
  gameTypes: gameTypes,
  gridSize: propGridSize,
  gridSizes: gridSizes,
  name: propName,
}) {
  
  const difficultyOptions = difficulties.map((difficulty) => (
    {
      key: difficulty,
      text: difficulty,
      value: difficulty
    }
  ))
  
  const gridOptions = gridSizes.map((gridSize) => (
    {
      key: gridSize,
      text: gridSize,
      value: gridSize
    }
  ))
  
  const typeOptions = gameTypes.map((gameType) => (
    {
      key: gameType,
      text: gameType,
      value: gameType
    }
  ))

  const [difficulty, setDifficulty] = useState(propDifficulty || null)
  const [gameType, setGameType] = useState(propGameType || null)
  const [gridSize, setGridSize] = useState(propGridSize || null)
  const [name, setName] = useState(propName || "")

  const startGame = () => {
    console.log('Lets start this game!');
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
            options={typeOptions}
            value={gameType}
            onChange={(event) => setGameType(event.target.outerText)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as='h3' textAlign='center'>
            Game Difficulty
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            fluid
            selection
            options={difficultyOptions}
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.outerText)}
          />
        </Grid.Column>
      </Grid.Row >
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as='h3' textAlign='center'>
            Game Grid Size
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            fluid
            selection
            options={gridOptions}
            value={gridSize}
            onChange={(event) => setGridSize(event.target.outerText)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <StartGameButton type={"green"} onStart={startGame} />
      </Grid.Row>
    </Grid>
  )
}

