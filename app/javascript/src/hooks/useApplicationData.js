import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    games: [],
    match: {},
    matches: [],
    player: {},
    isCreating: true,
    isLoading: true,
  })

  useEffect(() => {
    axios.get(`/api/v1/games`)
      .then(({ data: games }) => {
        setState(() => ({ games, isLoading: false, isCreating: true }))
      })
  }, [])

  const getMatches = (game_id) => {
    useEffect(() => {
      axios.get(`/api/v1/matches`, { params: { game_id: game_id } })
        .then(({ data: matches }) => {
          setState(() => ({ matches }))
        })
    }, [])
  }

  const createPlayer = (playerName) => {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/players`, { name: playerName })
        .then(({ data: player }) => {
          console.log('player :>> ', player);
          setState(() => ({ ...state, player, isCreating: false }))
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }
  const createMatch = (game_id, player_id) => {
    console.log('game_id :>> ', game_id);
    console.log('player_id :>> ', player_id);
    getMatches

    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/matches`, { game_id: game_id, player_id: player_id })
        .then(response => {
          setState(() => ({ match }))
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }
  
  const completeMatch = (id, duration) => {
    return new Promise((resolve, reject) => {
      axios.patch(`/api/v1/matches${id}`, { duration: duration })
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
    state
  }
}

