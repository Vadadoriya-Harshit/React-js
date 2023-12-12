import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import Header from './Header';
import Routing from './Routing';
function App() {
  return (
  <div>
      <BrowserRouter>
      <Header />
      <Routing />
     
    </BrowserRouter>
  </div>
  
  )
}

export default App