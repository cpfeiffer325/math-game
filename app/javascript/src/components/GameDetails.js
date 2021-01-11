import React, { useState } from 'react'
import { Dropdown, Grid, Header, Input } from 'semantic-ui-react'

import StartGameButton from './StartGameButton'

const difficultyOptions = [
  {
    key: 'Easy',
    text: 'Easy',
    value: 'Easy',
  }, 
  {
    key: 'Medium',
    text: 'Medium',
    value: 'Medium',
  }, 
  {
    key: 'Hard',
    text: 'Hard',
    value: 'Hard',
  },
]

const gridOptions = [
  {
    key: '4x4',
    text: '4x4',
    value: '4x4',
  }, 
  {
    key: '5x5',
    text: '5x5',
    value: '5x5',
  }, 
  {
    key: '6x6',
    text: '6x6',
    value: '6x6',
  },
  {
    key: '7x7',
    text: '7x7',
    value: '7x7',
  },
]

const typeOptions = [
  {
    key: '4x4',
    text: '4x4',
    value: '4x4',
  }, 
  {
    key: '5x5',
    text: '5x5',
    value: '5x5',
  }, 
  {
    key: '6x6',
    text: '6x6',
    value: '6x6',
  },
  {
    key: '7x7',
    text: '7x7',
    value: '7x7',
  },
]

export default function GameDetails ({
  difficulty: propDifficulty,
  name: propName,
}) {

  const [difficulty, setDifficulty] = useState(propDifficulty || "Easy")
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
              onChange={setDifficulty}
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
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <StartGameButton type={"green"} onStart={startGame} />
      </Grid.Row>
    </Grid>
  )
}

