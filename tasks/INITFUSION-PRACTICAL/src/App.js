import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Postlist from './Postlist';
import Create from './Create';
import View from './View';
import Edit from './Edit';
   
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Postlist/>}></Route>
      <Route path='/Create'element={<Create/>}></Route>
      <Route path='/View/:postid/'element={<View/>}></Route>
      <Route path='/Edit/:postid/'element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
