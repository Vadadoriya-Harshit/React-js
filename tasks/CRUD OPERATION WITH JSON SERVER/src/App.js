import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Empdetailst from './Empdetails';
import Create from './Create';
import View from './View';
import Edit from './Edit';
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme

function App() {
  return (
   <>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Empdetailst/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path="/View/:empId" element={<View />} />
    <Route path="/Edit/:empId" element={<Edit />} />
  </Routes>
   </BrowserRouter>
   </>  
  );
}

export default App;
