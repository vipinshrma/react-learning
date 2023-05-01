import React, {useState} from 'react'
import StaticModal from './StaticModal';

const MovieCard1 = ({imdbID,Title,Year,Genre,imdbRating,Images}) => {
  let [modalshow, setModalShow] = useState(false);

  let showModalDialog = ()=>{
    setModalShow(false)
  }

  return (  
    <>  
    <div className='col-md-3'>
        <div className='card'>
            <img src = {Images[0]}  />
            <div className='card-body'>
                <h3 className='card-title'>{Title}</h3>
                <p className='card-year'>{Year}</p>
                <p className='card-genre'>{Genre}</p>
                <p className='card-rating'>{imdbRating}</p>
                <StaticModal data={{Title,Year,Genre,imdbRating,Images,imdbID}} />
                {/* <button className='btn btn-primary' onClick={showModalDialog}>Edit</button> */}
            </div>
        </div>
    </div>
    </>

  )
}

export default MovieCard1