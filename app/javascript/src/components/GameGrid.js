import React from 'react'
import { Grid, Image, Input } from 'semantic-ui-react'

let col_values = [1,2,3,4,5]
let row_values = [5,6,7,8,9]

export default function GameGrid({ 
    game: game, 
    match: match
  }) {

  if (Object.keys(match).length === 0) {
    console.log('no match')
  } else {
    console.log('game_type :>> ', game.attributes.game_type);
    col_values = match.attributes.column_values
    row_values = match.attributes.row_values
  }
  return (
    <Grid>
      <Grid.Row columns={6}>
        {/* {operator} */}
        x
        {col_values.map((val) => (
          <Grid.Column key={val}>
            {val}
          </Grid.Column>
        ))}
      </Grid.Row>
      {row_values.map((x) => (
        <Grid.Row columns={6} key={x}>
          {x}
          {col_values.map((y) =>
            <Grid.Column key={y}>
              <Input style={{ width: 100, height: 100, textAlign: "center", fontSize: "40px", padding: 0 }} />
            </Grid.Column>
          )}
        </Grid.Row>
      ))}
    </Grid>
  )
}
