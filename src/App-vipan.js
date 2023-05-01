import React, { useEffect, useState } from "react";

let App = () => {

  let [result,setResult] = useState([]);
  let [originalData,setOriginalData] = useState([]);
  
  // let [displayResult,setDisplayResult] = useState([]);

  let getData = async(value) => {
      if(!value) return setResult(originalData);
      // let res = await fetch("https://jsonplaceholder.typicode.com/users")
      // let data = await res.json();
      // setDisplayResult(data)
      let filterData = originalData.filter(el=>{
        return value && el.name.toLowerCase().includes(value.toLowerCase())
      })
      setResult(filterData)
  }

  let displayData = async(value) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json();
    setResult(data)
    setOriginalData(data)
}

  let handleClick = (val) => {
    getData(val)
  }

  useEffect(()=>{
    displayData()
  },[])

  return(
    <>
      <input type = "text" onChange={(e)=>handleClick(e.target.value)} />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <thead>
          {
            result.map(el=>{
              return(
                <tr key = {el.id}>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                </tr>
              )
            })
          }
        </thead>
      </table>
    </>
  )
}

export default App;