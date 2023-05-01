import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className = "col-md-3 mb-5">
            <div className='cards'>
                <img className='img-fluid' src = {props.imgsrc} />
                <div className='card-details'>
                    <h4 className='card-name'>{props.name}</h4>
                    <p className='card-title'>{props.title}</p>
                    <a href = {props.link} className='btn btn-primary'>Watch Now</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards