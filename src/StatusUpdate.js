import React, { useEffect, useState } from 'react'

let userList = [
  {
    username: "sam",
    face: "green",
    status: "pending",
    id: 1
  },
  {
    username: "ravi",
    face: "blue",
    status: "pending",
    id: 2
  },
  {
    username: "pari",
    face: "pink",
    status: "pending",
    id: 3
  }
]

const StatusUpdate = () => {

  let [users,setUsers] = useState(userList);
  
  // let verifyHandler = (id) => {
  //   let tempUsers = [...users];     
  //   let tempUser = tempUsers[id];
  //   console.log(tempUser)
  //   let userObj = {...tempUser, status:"Active"}
  //   tempUser[id] = userObj;
  //   setUsers(tempUsers)
  // }


    //https://stackoverflow.com/questions/71022511/how-to-update-a-single-key-value-pair-in-an-array-of-objects-in-react
    let verifyHandler = (id) => {
      setUsers(
        users.map((item) => {
          if (item.id === id) {
            return { ...item, status:"Active" };
          } else {
            return item;
          }
        })
      )
    }
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            users.map((user,index)=>{
              return(
                <div className='col-md-4' key={user.id}>
                  <h1>{user.username}</h1>
                  <h2>{user.face}</h2>
                  <h3>{user.status}</h3>
                  <button className='btn btn-primary' onClick={()=>verifyHandler(user.id)}>Verify</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default StatusUpdate