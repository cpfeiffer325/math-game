import React from 'react'

import GameGrid from './GameGrid'
import CreateNewPlayer from './CreateNewPlayer'
import RestartGame from './RestartGame'
import SelectNewGame from './SelectNewGame'

import Timer from './Timer'

// import useApplicationData from '../hooks/useApplicationData'

export default function Game({ 
  createMatch: createMatch,
  createPlayer = createPlayer,
  completeMatch: completeMatch,
  game: game, 
  games: games,
  getGame: getGame,
  getMatches: getMatches,
  match: match, 
  player: player
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
        getMatches={getMatches}
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
          createMatch={createMatch}
          createPlayer={createPlayer}
          game={game}
          games={games}
          getGame={getGame}
          getMatches={getMatches}
          player={player}
        />
      </div>
    </div>
  )
}
