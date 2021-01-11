import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Game from './Game'
import Highscores from './Highscores'
import GameDetails from './GameDetails'
import Title from './Title'

import { Grid, Segment } from 'semantic-ui-react'
import useApplicationData from '../hooks/useApplicationData'

export default function App () {
  const { 
    completeMatch,
    createMatch,
    state 
  } = useApplicationData()

  console.log('state :>> ', state);
  // const playerName = state

  return (
    <div style={{margin: "20px"}}>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Title name="Lilybug"/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column width={10}>
            <Segment>
              <Game />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <GameDetails 
                createMatch={createMatch}
                completeMatch={completeMatch}
              />
            </Segment>
            <Segment>
              <Highscores />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
