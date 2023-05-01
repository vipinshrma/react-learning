import React from 'react'

const Child = ({propName, propMeth}) => {
  return (
    <>
      <div>{propName}</div>
      <button onClick={()=>propMeth("sdsdasdasda")}>Clicked</button>
    </>
    
  )
}

export default Child