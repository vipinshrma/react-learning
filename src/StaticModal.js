import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import movieData from "./movieData.json";


function StaticModal({data,handleSubmit,show,handleClose}) {
  const [formData,setFormData] = useState({})

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})

  }

  useEffect(()=>{
    setFormData(data)
  },[data])


  const onSubmit  = (e)=>{
    e.preventDefault()
    handleSubmit(formData);
    setFormData({})
    handleClose()
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie Details</Modal.Title>
        </Modal.Header>
        <form name="form" onSubmit={(e)=>onSubmit(e)}>
        <Modal.Body>          
          <div className='row'>
            {/* <input type="hidden" name="id" className='form-control' disabled value={formData.imdbID} /> */}
            <div className="col-12 mb-3">
              <label className='form-label'>Title</label>
              <input type="text" name="Title" onChange={handleChange} className='form-control' value={formData.Title} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>Year</label>
              <input type="text" name="Year" onChange={handleChange} className='form-control' value={formData.Year} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>Genre</label>
              <input type="text" name="Genre" onChange={handleChange} className='form-control' value={formData.Genre} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>IMDB Rating</label>
              <input type="text" name="imdbRating" onChange={handleChange} className='form-control' value={formData.imdbRating} />
            </div>
          </div>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">Save Changes</Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default StaticModal;