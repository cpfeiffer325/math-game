import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    game: {},
    games: [],
    match: {},
    matches: [],
    player: {},
    isCreatingPlayer: true,
    isCreatingMatch: true,
    isLoading: true,
  })

  useEffect(() => {
    axios.get(`/api/v1/games`)
      .then(({ data: games }) => {
        setState(() => ({ ...state, games: games.data, isLoading: false, isCreatingPlayer: true, isCreatingMatch: true }))
      })
  }, [])

  const getMatches = (game_id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/matches`, { params: { game_id: game_id } })
        .then(({ data: matches }) => {
          setState(() => ({...state, matches: matches.data }))
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }

  const createPlayer = (playerName) => {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/players`, { name: playerName })
        .then(({ data: player }) => {
          setState(() => ({ ...state, player: player.data, isCreatingPlayer: false }))
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }
  
  const createMatch = (game_id, player_id) => {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/matches`, { game_id: game_id, player_id: player_id })
      .then(({ data: match }) => {
        setState(() => ({ ...state, match: match.data, isCreatingMatch: false}))
        resolve()
      })
      .catch(res => {
        reject()
      })
    })
  }

  const getGame = (game_id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/games/${game_id}`)
      .then(({ data: game }) => {
          setState(() => ({ ...state, game: game.data }))
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }
  
  const completeMatch = (id, duration) => {
    return new Promise((resolve, reject) => {
      axios.patch(`/api/v1/matches/${id}`, { duration: duration })
        .then(response => {
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }

  return {
    completeMatch, 
    createMatch,
    createPlayer,
    getMatches,
    getGame,
    state
  }
}

