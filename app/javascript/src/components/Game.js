import React from 'react'

import GameGrid from './GameGrid'
import CreateNewPlayer from './CreateNewPlayer'
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
  completeMatch: completeMatch,
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
        completeMatch={completeMatch}
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
        <CreateNewPlayer
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
