import { useState, useEffect } from 'react'
import axios from 'axios'

export default function createApplicationData() {

  const saveNewPlayer = (playerName) => {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/players`, { name: playerName })
        .then(response => {
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }

  return {
    saveNewPlayer
  }
}
