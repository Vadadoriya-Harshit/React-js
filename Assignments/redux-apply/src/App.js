// Importing necessary dependencies and components
import logo from './logo.svg'; // Example: Importing an image file
import './App.css'; // Example: Importing CSS file
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing routing components from react-router-dom

// Importing Bootstrap CSS from node_modules
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// Importing components used in routing
import Home from './Home';
import CreateUser from './CreateUser';

// Function component named App
function App() {
  return (
    <div className="App">
      {/* Setting up BrowserRouter for routing */}
      <BrowserRouter>
        <Routes>
          {/* Defining routes */}
          {/* Route for the home page */}
          <Route path='/' element={<Home/>}></Route>
          {/* Route for creating a user */}
          <Route path='/create' element={<CreateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Command to run JSON Server (Assuming you have a file named __filename.json)
// json-server --watch __filename.json --port 8000
