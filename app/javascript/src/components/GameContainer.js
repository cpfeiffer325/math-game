import React from 'react'
import { Tab } from 'semantic-ui-react'
import Game from './Game'


const panes = [
  { menuItem: 'Addition', render: () => <Tab.Pane><Game/></Tab.Pane> },
  { menuItem: 'Subtraction', render: () => <Tab.Pane><Game/></Tab.Pane> },
  { menuItem: 'Multiplication', render: () => <Tab.Pane><Game/></Tab.Pane> },
  { menuItem: 'Division', render: () => <Tab.Pane><Game/></Tab.Pane> },
]

export default function GameContainer () {
  return (
    <Tab panes={panes} />
  )
}


