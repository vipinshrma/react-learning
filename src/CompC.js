import React, { useContext } from 'react'
import { AppContext } from './App'


const CompC = () => {

    let appData = useContext(AppContext)

  return (
    <>
    <h1>CompC</h1>
    <p>{appData}</p>
    </>
  )
}

export default CompC