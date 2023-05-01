import React, { useState } from 'react'
import MovieCard1 from './MovieCard1';
import movieData from "./movieData.json";
import StaticModal from './StaticModal'


const Movie = () => {
  let [modalshow, setModalShow] = useState(false);
  const [selectedMovieData,setSelectedMovieData] = useState({})
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [movieDataArr,setMovieDataArr] = useState([...movieData])

  const handleSubmit = (data) => {
    let selectedMovie = movieDataArr.find((movie=>movie.imdbID === data.imdbID));
    let selectedMovieIdx = movieDataArr.indexOf(selectedMovie)
    if(selectedMovieIdx !== -1){
        let tempMovieData = [...movieDataArr]
        tempMovieData[selectedMovieIdx] = data;
        setMovieDataArr([...tempMovieData])
        setSelectedMovieData({})
    }
    //todo
    // console.log('xyz', e.target.elements.id.value);
  }

  const editHandler = (moviedId)=>{
    if(!moviedId) return alert("Please pass the movie id");
    let selectedMovie = movieDataArr.find((movie=>movie.imdbID === moviedId));
    if(selectedMovie){
        handleShow();
        setSelectedMovieData(selectedMovie)
    }
  }


  return (
    <div className='container'>
        <div className='row'>
            <h1>Movie Database</h1>
            {
                movieDataArr.map(item=>{
                    return(
                        <MovieCard1
                            {...item}
                            handleEdit={editHandler}
                        />
                    )
                })
            }
         <StaticModal handleClose={handleClose} data={selectedMovieData} show={modalshow} handleSubmit={handleSubmit}/>
        </div>
    </div>

  )
}

export default Movie