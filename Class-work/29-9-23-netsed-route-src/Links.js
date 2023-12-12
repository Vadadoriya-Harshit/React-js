import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Services from './Services'
import Contact from './Contact'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'

function Links() {
  return (
    <div>
      
      <Link to="/service">Services</Link>
      
      <Link to="/con">Contact</Link>

      <Routes>
        <Route path="service" element={<Services/>}>
            <Route path='service1' element={<Service1/>}></Route>
            <Route path='service2' element={<Service2/>}></Route>
            <Route path='service3' element={<Service3/>}></Route>
           
        </Route>
        <Route path="con" element={<Contact/>}>
            
        </Route>
      </Routes>
    </div>
  )
}

export default Links
