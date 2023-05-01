import React from 'react'
import {useParams} from "react-router-dom"

const Users = () => {
    let params = useParams();
    let name = params;
  return (
    <div>
        <h1>This is {name} Page</h1>
    </div>
  )
}

export default Users