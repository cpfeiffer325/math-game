import React from 'react'

import GameGrid from './GameGrid'
import NewPlayer from './NewPlayer'
import RestartGame from './RestartGame'
import SelectNewGame from './SelectNewGame'

import Timer from './Timer'

// import useApplicationData from '../hooks/useApplicationData'

export default function Game({ 
  createPlayer = createPlayer,
  game: game, 
  match: match, 
  player: player,
  createMatch: createMatch,
  getMatches: getMatches,
  games: games,
  getGame: getGame
}) {
  const createNewGame = () => {
    console.log('Lets start a new game!');
  }

  return (
    <div style={{ margin: "20px" }}>
      <Timer/>
      <GameGrid
        game={game}
        match={match}
        />
      <div style={{ margin: "20px" }}>
        <RestartGame 
          createMatch={createMatch}
          game={game}
          onNew={createNewGame}
          player={player}
          />
        <NewPlayer
          createPlayer={createPlayer}
          player={player}
          />
        <SelectNewGame
          game={game}
          createPlayer={createPlayer}
          player={player}
          createMatch={createMatch}
          getMatches={getMatches}
          games={games}
          getGame={getGame}
        />
      </div>
    </div>
  )
}
