import React, { createElement, useState } from 'react'

const App1 = () => {
  let [state,setState] = useState(0);
  let clickHandler = (type)=>{
    switch(type){
      case "add":
        setState(state+2);
        break;
      case "min":
        setState(state-2);
        break;
    }
    return state;
  }
  return (    
    <div>
        <p>{state}</p>
        <button className='btn btn-primary' onClick={()=>{clickHandler("add")}}>+</button>
        <button onClick={()=>{clickHandler("min")}}>-</button>
    </div>
  )
}

export default App1