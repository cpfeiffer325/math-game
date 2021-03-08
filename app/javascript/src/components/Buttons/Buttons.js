import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Buttons({ type, onClick, children }) {
  return (
    <Button className={type} onClick={onClick}>{children}</Button>
  )
}
