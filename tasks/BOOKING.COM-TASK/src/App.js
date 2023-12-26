import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
  <BrowserRouter>
      <Header/>
  </BrowserRouter>
    </div> 
  )
}

export default App