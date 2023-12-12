import logo from './logo.svg';
import './App.css';
import Home from './Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddUsers from './AddUsers.js';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/create' element={<AddUsers/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
