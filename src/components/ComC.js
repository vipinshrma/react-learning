import React, { useContext } from 'react'
import { AppProvider } from '../App'

const ComC = () => {
  let appData = useContext(AppProvider)
  return (
    <>
      <p>Component C</p>
      <p>{appData}</p>
    </>
  )
}

export default ComC