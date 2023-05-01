import React from 'react'
import MovieCard1 from './MovieCard1'
import movieData from "./movieData.json"

const Movie1 = () => {    
    return (
        <>
            <div className='container' key="container">
                <div className='row' key="row">
                    {
                        movieData.map(movie => {
                            return (
                                <MovieCard1 key = {movie.imdbID}
                                    {...movie}
                                />
                            )
                        })
                    }
                </div>
            </div>                    
        </>

    )
}

export default Movie1