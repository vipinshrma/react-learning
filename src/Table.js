import React from 'react'

const Table = ({users,removeUser,checkComplete}) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(el=>{
              return(
                <tr key = {el.id} className = {el.completed ? "completed" : "not-completed"}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td><button onClick={()=>removeUser(el.id)}>x</button>
                    { <input type = "checkbox" onChange={()=>checkComplete(el.id)} />}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  )
}

export default Table;