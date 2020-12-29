import React from 'react'
import { Grid, Image, Input } from 'semantic-ui-react'

const col_values = [1,2,3,4,5]
const row_values = [5,6,7,8,9]

export default function Game() {
  return (
    <Grid>
      <Grid.Row columns={6}>
        x
        {col_values.map((val) => (
          <Grid.Column>
            {val}
          </Grid.Column>
        ))}
      </Grid.Row>
      {row_values.map((x) => (
        <Grid.Row columns={6}>
          {x}
          {col_values.map((y) =>
            <Grid.Column>
              <Input style={{ width: 100, height: 100, textAlign: "center", fontSize: "40px", padding: 0 }} />
            </Grid.Column>
          )}
        </Grid.Row>
      ))}
    </Grid>
  )
}
