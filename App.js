import React, { useState } from "react";

let App = () => {
  
  let [name,setName] = useState('');
  let [email,setEmail] = useState('');
  
  let [result,setResult] = useState([]);
  
  
  let getResult = (e) => {
    e.preventDefault(); 
    setResult([...result,{id:result.length+1,name,email,completed:false}])
  }

  let removeEl = (id) => {
    setResult(result.filter(el=>el.id !== id))
  }
  

  let checkComplete = (id) => {
    setResult(result.filter(el=>{
        if(el.id==id){
          return el.completed = true;
        }          
    }))
  }

  return(
    <>
      <form>
        <input type = "text" value = {name} name = "name" onChange={(e)=>setName(e.target.value)} />
        <input type = "email" value = {email} name = "email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="submit" name = "submit" onClick={getResult} />
      </form>
      <hr />

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
            result.map(el=>{
              return(
                <tr key = {el.id}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td><button onClick={()=>removeEl(el.id)}>x</button>
                    <input type = "checkbox" onChange={()=>checkComplete(el.id)} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App;

