import {Routes, Route,Outlet } from "react-router-dom";
import Flights from './Flights';
import Car from './Car';
import Hotel from './Hotel';
import Attraction from './Attractions';
import Home from "./Home";
function Routing() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Attrac" element={<Attraction />} />
     </Routes>
      <Outlet />

    </div>
  )
}

export default Routing