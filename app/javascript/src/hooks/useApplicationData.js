import { useState } from 'react'
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    player: null,
    name: ""
  })

  const saveNewPlayer = (playerName) => {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/players`, { name: playerName })
        .then(response => {
          setState({player: response.data, name: response.data.name })
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }

  return {
    saveNewPlayer,
    state
  }
}
