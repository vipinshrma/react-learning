import React from 'react'

const MovieCard = ({Images,Title,Genre,imdbRating}) => {
  return (
    <div className = "col-md-3">
        <div className = "card">
            <img src = {Images[Math.floor(Math.random()*Images.length)]} className='img-fluid' />
            
            <div className = "card-body">
                <h5 className = "card-title">{Title}</h5>
                <p className = "card-genre">{Genre}</p>
                <h6 className = "card-imdbRating">IMDB Rating {imdbRating}</h6>
                <a href = "#" className = "btn btn-primary">Edit Data</a>
            </div>
        </div>
    </div>
  )
}

export default MovieCard;