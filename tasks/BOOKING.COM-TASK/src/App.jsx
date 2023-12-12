import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Nav from './Nav';
import './App.css';
import Routing from './Routing';
import { createContext, useState } from 'react';
export const search=createContext();
function App() {
  return (
  <div>
     <BrowserRouter>
      <Nav/>
      <Routing/>
    </BrowserRouter>
  
   
  </div>
  
  )
}

export default App