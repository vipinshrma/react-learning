import React from 'react'
import MovieCard from './MovieCard';
import movieData from "./movieData.json";


const Movie = () => {
  return (
    <div className='container'>
        <div className='row'>
            <h1>Movie Database</h1>
            {
                movieData.map(item=>{
                    return(
                        <MovieCard 
                            {...item}
                        />
                    )
                })
            }
            
            
        </div>
    </div>

  )
}

export default Movie