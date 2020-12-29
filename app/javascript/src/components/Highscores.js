import React from 'react'
import { Header, Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function Highscores () {
  return (
    <div>
      <Header as='h3' block>
        Highscores for Multiplication Medium 5x5 {/*  (Make Title Dynamic based on game type and settings) */}
    </Header>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rank</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>1</Label>
            </Table.Cell>
            <Table.Cell>Lily</Table.Cell>
            <Table.Cell>0:53</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Evelyn</Table.Cell>
            <Table.Cell>0:57</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Zach</Table.Cell>
            <Table.Cell>1:04</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
} 
