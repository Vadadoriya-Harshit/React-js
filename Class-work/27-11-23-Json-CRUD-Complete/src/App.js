import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpDetail from './EmpDetail';
import EmpCreate from './EmpCreate';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">

      <h1>React JSON-Server CRUD </h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpDetail/>}></Route>
        <Route path="/employee/create" element={<EmpCreate/>}></Route>
        <Route path="/employee/view/:empId" element={<EmpView/>}></Route>
        <Route path="/employee/edit/:empId" element={<EmpEdit/>}></Route>
      </Routes>
      </BrowserRouter>  

      
    </div>
  );
}

export default App;
