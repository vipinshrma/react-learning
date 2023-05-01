import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const MovieCard1 = ({ imdbID, Title, Year, Genre, imdbRating, Images,handleEdit }) => {


  return (
    <>
      <div className='col-md-3'>
        <div className='card'>
          <img src={Images[0]} />
          <div className='card-body'>
            <h3 className='card-title'>{Title}</h3>
            <p className='card-year'>{Year}</p>
            <p className='card-genre'>{Genre}</p>
            <p className='card-rating'>{imdbRating}</p>
            <Button variant="primary" onClick={()=>handleEdit(imdbID)}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </>

  )
}

export default MovieCard1