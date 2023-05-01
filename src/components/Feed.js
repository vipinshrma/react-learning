import React from 'react'

const Feed = ({name,content,children}) => {
    // console.log(props)
  return (
    <>
        <h1>{name}</h1>
        <div>
            <p>{content}</p>
            <p>{children}</p>
        </div>
    </>
  )
}

export default Feed