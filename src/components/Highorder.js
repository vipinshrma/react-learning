import React, { useState } from "react";
let Highorder = () => {

  function Counter(){
    let [count,setCount] = useState(0);
    return(
      <>
        <h1>{count}</h1>
        <button onClick = {()=>setCount(count+1)}>+</button>
      </>
    )
  }

  function HOCRed(props){
    return(
      <h2 style={{color:"red"}}><props.cmp /></h2>
    )
  }
  function HOCGreen(props){
    return(
      <h2 style={{color:"green"}}><props.cmp /></h2>
    )
  }
  
  return(
    <>
      <h1>High order components</h1>
      <HOCRed cmp = {Counter} />
      <HOCGreen cmp = {Counter} />
    </>
  )
}

export default Highorder;