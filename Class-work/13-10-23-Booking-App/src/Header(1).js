import React from 'react'
import './App.css';
import {Button,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (
  <>
  <Row>
            <Col xl={5} sm={11} md={11} lg={11} className='text-white fs-1 ' >Booking.Com</Col>
            <Col xl={6} sm={0} md={0} lg={0} className='pt-2 d-sm-none d-md-none d-xl-block'>
            <Button className='a border border-0 btn btn1'>INR</Button>
            <Button className='a border border-0 btn1'>India</Button>
            <Button className='a border border-0 btn1'>?</Button>
            <Button className=' text-white a border border-0 btn1'>List Your Property</Button>
            <Button variant='light' className='text-primary ms-2 bg-light'>Register</Button>
            <Button variant='light' className='text-primary ms-2 bg-light'>Sign In</Button>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} className='text-white fs-3 pt-2 text-right'>
            <i className="fa-solid fa-bars d-xl-none opacity-xl-0 opacity-xl-1 "></i></Col>
        </Row>
  </>
  )
}

export default Header;