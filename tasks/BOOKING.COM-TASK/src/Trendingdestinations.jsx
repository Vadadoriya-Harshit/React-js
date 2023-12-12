import React from 'react'
import { Container, Row, Col, InputGroup, Form, Button, CloseButton } from 'react-bootstrap';
import './App.css';
function Trends() {
  return (
    <div>
          <div className='trends container'>
        <div className='trends-title'>
      <h3 className='p-3 pb-0 ps-0'>
      Trending destinations
      </h3>
      <p>
      Travellers searching for India also booked these
      </p>
      </div>
         <div className="row">
            <div className="col-md-6 trend-slide" id='delhi'>
                <img className='col-12 img-fluid py-2 py-lg-0' src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" />
            </div>
            <div className="col-md-6 trend-slide" id='bangalore'>
                <img className='img-fluid col-12 py-2 py-lg-0 ' src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" />
            </div>
         </div>
         <div className="row pt-0 pt-lg-3">
            <div className="col-lg-4 trend-slide" id='Mumbai'>
              <img className='col-12 img-fluid p-2 p-lg-0' src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" />
            </div>
            <div className="col-lg-4 trend-slide" id='Chennai'>
          <img className='col-12 img-fluid p-2 p-lg-0' src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" />
            </div>
            <div className="col-lg-4 trend-slide" id='Kolkaata'>
         <img className='col-12 img-fluid p-2 p-lg-0' src="https://cf.bstatic.com/xdata/images/city/600x600/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=" alt="" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Trends;