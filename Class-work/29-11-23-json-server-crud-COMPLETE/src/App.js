import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import EmpList from './EmpList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpCreate from './EmpCreate';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';

function App() {

 return(
  <>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpList/>}></Route>
    <Route path='/emplyoee/create' element={<EmpCreate/>}></Route>
    <Route path='/emplyoee/view/:empId' element={<EmpView/>}></Route>
    <Route path='/emplyoee/edit/:empId' element={<EmpEdit/>}></Route>
  </Routes>
  </BrowserRouter>

    {/* <EmpList/> */}
    {/* <EmpCreate/> */}
  
  </>
 )
}

export default App;
