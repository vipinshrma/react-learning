import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    //todo
    e.preventDefault();
    console.log('xyz', e.target.elements.id.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie Details</Modal.Title>
        </Modal.Header>
        <form name="form" onSubmit={(e)=>handleSubmit(e)}>
        <Modal.Body>          
          <div className='row'>
            <input type="hidden" name="id" className='form-control' value={props.data.imdbID} />
            <div className="col-12 mb-3">
              <label className='form-label'>Title</label>
              <input type="text" name="title" className='form-control' value={props.data.Title} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>Year</label>
              <input type="text" name="year" className='form-control' value={props.data.Year} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>Genre</label>
              <input type="text" name="genre" className='form-control' value={props.data.Genre} />
            </div>
            <div className="col-12 mb-3">
              <label className='form-label'>IMDB Rating</label>
              <input type="text" name="rating" className='form-control' value={props.data.imdbRating} />
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