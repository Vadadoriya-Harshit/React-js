import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import gallery from './gallery';
import Model1 from './Model1';
function Search() {
  const { value } = useParams();
  const [hotels, setHotels] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showfull, setShowfull] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  useEffect(() => {
    fetch('http://localhost:8000/Hotels')
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error('Error fetching hotels:', error));
  }, []);

  const filteredItems = hotels.filter(
    (item) => item.city.toLowerCase().includes(value.toLowerCase())
  );
  const [change,setchange]=useState("");
  

  return (
    <>
      {hotels.length > 0 ? (
        filteredItems.map((v, index) => (
          <div className="container" key={index}>
            <div className="row w-100 border border-1 border-secondary px-2 py-3 rounded-4 mt-3 ms-xl-5 ms-2">
              <div className="col-xl-4 col-lg-4 col-12">
               <a style={{cursor:"pointer"}} onClick={() => handleShow(true)}>
               <img
                  style={{ borderRadius: '20px' }}
                  src={v.image}
                  width="100%"
                  height="250px"
                  alt="Hotel"
                />
               </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt-2">
                <h5>City: {v.city}</h5>
                <h4>
                  <a className="text-decoration-none" id="title" href="#">
                    {v.name}
                  </a>
                </h4>
                <p className="sw-mp">
                  <a href="#">{v.name}</a> . <a href="#">Show on map</a>
                </p>
                <p>{v.description}</p>
              </div>
              <div className="col-xl-2 col-lg-2 col-12">
                <div className="d-flex align-items-center">
                  <div>
                    <h5>{v.fdbk}</h5>
                    <p>29 reviews</p>
                  </div>
                  <div className="ms-2">
                    <a className="bg-primary text-white p-2 rounded-2" href="#">
                      {v.rating}
                    </a>
                  </div>
                </div>
                <p className="nwbook bg-warning px-1 rounded-1 d-inline-block">
                  New to Booking.com
                </p>
                <button className="bg-primary text-white py-1 px-2 border-0 rounded">
                  Show prices
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )};
       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Model1/>
        </Modal.Body>
      </Modal>
   

    </>
  );
}

export default Search;
