import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Flights from './Flights';
import Car from './Car';
import Hotel from './Hotel';
import Attraction from './Attractions';
import Home from './Home';
import Search from './Search';
import Loader from './Loader'; // Import the Loader component

function Routing() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    showLoader(); 
  }, [location]);

  const showLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  };
  
  return (
    <div>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Attrac" element={<Attraction />} />
        <Route path="/search/:value" element={<Search />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Routing;
