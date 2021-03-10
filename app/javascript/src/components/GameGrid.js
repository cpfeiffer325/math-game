import React, { useState } from 'react'
import { Grid, Icon, Input } from 'semantic-ui-react'

let col_values = [1,2,3,4,5]
let row_values = [5,6,7,8,9]
let operator = ""
let operators = {
  "addition": (x, y) => x + y,
  "multiplication": (x, y) => x * y,
  "subtraction": (x, y) => x - y,
}
export default function GameGrid({ 
    game: game, 
    match: match
  }) {

  if (Object.keys(match).length === 0) {
    console.log('no match')
  } else {
    if (game.attributes.game_type === "multiplication")
    col_values = match.attributes.column_values
    row_values = match.attributes.row_values

    switch (game.attributes.game_type) {
      case "addition":
        operator = <i className="big plus icon"></i>
        break
      case "multiplication":
        operator = <i className="big times icon"></i>
        break
      case "subtraction":
        operator = <i className="big minus icon"></i>
        break
    }
  }

  const [results, setResults] = useState({})

  const checkResult = (value, x, y) => {
    console.log('value, x, y :>> ', value, x, y);
    let answer = operators[game.attributes.game_type](x, y)
    let newObj = {...results}
    let key = `${x}_${y}`
    console.log('newObj :>> ', newObj);
    if (answer == value) {
      newObj[key] = true
      console.log('newObj :>> ', newObj);
      setResults(newObj)
    } else {
      delete newObj[key]
    }
    {console.log('results >> ', results)}
    if (Object.keys(newObj).length === 3) {
      console.log('Yay I am SMRT:>> ');
    }
  }

  return (
    <Grid>
      <Grid.Row columns={6}>
        {operator}
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
              <Input onChange={(e) => checkResult(e.target.value, x, y)} style={{ width: 100, height: 100, textAlign: "center", fontSize: "20px", padding: 0 }} />
              {/* <Input onChange={(params) => {console.log('params :>> ', params.target.value, x, y)}} style={{ width: 100, height: 100, textAlign: "center", fontSize: "20px", padding: 0 }} /> */}
            </Grid.Column>
          )}
        </Grid.Row>
      ))}
    </Grid>
  )
}
