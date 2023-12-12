import {Routes, Route,Outlet } from "react-router-dom";
import Flights from './Flights';
import Hotel from './Hotel';
import Car from './Car';
import Attractions from './Attractions';
import Stays from "./Stays";
import Dev from "./Dev";
import Home from "./Home";
import search from './App';
import { useContext } from "react";
function Routing() {
  const recieve = useContext(search);
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/car" element={<Car />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/Stays" element={<Stays/>} />
      </Routes>
      <Outlet />

    </div>
  )
}

export default Routing