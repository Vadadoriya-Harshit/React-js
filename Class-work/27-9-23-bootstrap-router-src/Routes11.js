import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Services from './Services'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container,Row } from 'react-bootstrap'

function Routes11() {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>

    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path='/services' element={<Services/>} >Services</Route>
    </Routes>


    <Container>
        <Row className='border border-black'>
            <Col  className='bg-warning'>COl 1</Col>
            <Col>COl 2</Col>
            <Col md={7} className='bg-warning'> COl 3</Col>
            <Col>COl 4</Col>
        </Row>

        <Row className='border border-black'>
            <Col  className='bg-warning'>COl 1</Col>
            <Col>COl 2</Col>
            <Col md={7} className='bg-warning'> COl 3</Col>
            <Col>COl 4</Col>
        </Row>

    </Container>

    </div>
  )
}

export default Routes11
