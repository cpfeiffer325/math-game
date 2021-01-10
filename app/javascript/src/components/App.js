import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import GamesContainer from './GamesContainer'
import Highscores from './Highscores'
import GameOptions from './GameOptions'
import Title from './Title'

import { Grid, Segment } from 'semantic-ui-react'
import useApplicationData from '../hooks/useApplicationData'

export default function App () {
  const { state } = useApplicationData()

  return (
    <div style={{margin: "20px"}}>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Title playerName={state.name}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column width={10}>
            <Segment><GamesContainer /></Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment><GameOptions /></Segment>
            <Segment><Highscores /></Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
