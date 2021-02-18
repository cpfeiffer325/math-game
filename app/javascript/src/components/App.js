import React, { useEffect } from 'react'
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
    createPlayer,
    getMatches,
    state 
  } = useApplicationData()

  if (state.isLoading) {
    return <div className="App">Loading...</div>;
  } else {

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
                <Game
                  match={state.match}
                />
                {/* {console.log('state :>> ', state)} */}
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <GameDetails 
                  completeMatch={completeMatch}
                  createMatch={createMatch}
                  createPlayer={createPlayer}
                  getMatches={getMatches}
                  isCreating={state.isCreating}
                  games={state.games}
                  player={state.player}
                  />
              </Segment>
              <Segment>
                <Highscores 
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
