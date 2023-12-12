import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Routes11() {
  return (
   

      <>
      
      <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route  path='/about' element={<About/>}>About</Route>

        </Routes>
      </>
      
   
  )
}

export default Routes11


