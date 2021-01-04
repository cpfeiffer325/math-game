import React from 'react'
import { Tab } from 'semantic-ui-react'
import Game from './Game'

export default function GameContainer () {

  const game = <Game/>
  
  const panes = [
    { menuItem: 'Addition', render: () => <Tab.Pane>{game}</Tab.Pane> },
    { menuItem: 'Subtraction', render: () => <Tab.Pane>{game}</Tab.Pane> },
    { menuItem: 'Multiplication', render: () => <Tab.Pane>{game}</Tab.Pane> },
    { menuItem: 'Division', render: () => <Tab.Pane>{game}</Tab.Pane> },
  ]

  return (
    <Tab panes={panes} />
  )
}


