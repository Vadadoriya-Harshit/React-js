import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Navbar() {
  return (
    <div>
       <nav className=' py-3 mb-5'>
            <Link to='Styas' className='text-white text-decoration-none avtive-light border border-2 border-white rounded-5 p-2'><i className="fa-solid fa-bed text-white pe-1"></i>Styas</Link>
            <Link to='Flights'  className='text-white text-decoration-none ps-5'><i className="fa-solid fa-plane-circle-check text-white pe-1"></i>Flights</Link>
            <Link to='Flight + Hotel'  className='text-white text-decoration-none ps-5'><i className="fa-solid fa-globe text-white pe-1"></i>Flight + Hotel</Link>
            <Link to='CarRentals'  className='text-white text-decoration-none ps-5'> <i className="fa-solid fa-car-side text-white pe-1"></i>CarRentals</Link>
            <Link to='Attractions'  className='text-white text-decoration-none ps-5'><i className="fa-solid fa-tree text-white pe-1"></i>Attractions</Link>
            <Link to='Airport Taxis'  className='text-white text-decoration-none ps-5'><i className="fa-solid fa-taxi text-white pe-1"></i>Airport Taxis</Link>

        </nav>
      
            <Routes>
                <Route path='Stays' element={<Home/>}>Stays</Route>
                <Route path='Flights' element={<Home/>}>Flights</Route>
                <Route path='Flight + Hotel' element={<Home/>}>Flight + Hotel</Route>
                <Route path='CarRentals' element={<Home/>}>CarRentals</Route>
                <Route path='Attractions' element={<Home/>}>Attractions</Route>
                <Route path='Airport Taxis' element={<Home/>}>Airport Taxis</Route>
            </Routes>
    </div>
  )
}

export default Navbar