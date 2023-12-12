import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Home from './Home'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/'element={<Home/>}></Route>
      <Route path='/Signup'element={<Registration/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
