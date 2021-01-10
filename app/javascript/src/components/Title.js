import React from 'react'
import { Header } from 'semantic-ui-react'

export default function Title ({ name }) {
  return (
    <div>
      <Header as='h1' textAlign='center' color='green'>
        Mad Minute Math
      </Header>
      <Header as='h3' textAlign='center' color='black'>
        Hello {name}, I built this Math game for you :)
      </Header>
    </div>
  )
}
