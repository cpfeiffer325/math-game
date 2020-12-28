import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Game from './Game'
import HighScores from './HighScores'
import SideMenu from './SideMenu'
import Title from './Title'

import { Grid } from 'semantic-ui-react'

export default function App () {
  
  return (
    <div>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Title/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column width={3}>
            <SideMenu/>
          </Grid.Column>
          <Grid.Column width={9}>
            <Game/>
          </Grid.Column>
          <Grid.Column width={4}>
            <HighScores/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
