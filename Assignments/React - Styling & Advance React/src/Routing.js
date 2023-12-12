import {Routes, Route,Outlet } from "react-router-dom";
import Flights from './Flights';
import Hotel from './Hotel';
import Car from './Car';
import Attractions from './Attractions';
import Stays from "./Stays";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/car" element={<Car />} />
        <Route path="/attractions" element={<Attractions />} />
      </Routes>
      
      <Outlet />

    </div>
  )
}

export default Routing