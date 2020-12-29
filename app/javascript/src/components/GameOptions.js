import React from 'react'
import { Dropdown, Grid, Header } from 'semantic-ui-react'

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

export default function GameOptions () {
  return (
    <Grid>
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
              defaultValue={difficultyOptions[0].value}
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
            defaultValue={gridOptions[0].value}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

