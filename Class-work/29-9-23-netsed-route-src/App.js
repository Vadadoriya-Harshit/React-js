import { Container, Row,Col } from 'react-bootstrap';
import logo from './logo.svg';



//  import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import Routes11 from './Routes11';
import Links from './Links';

function App() {
  return (
    // <div className="App">
    //   {/* HELLO
    //   <button className='btn btn-primary'>CLICK ME</button> */}

     

    // </div>

    <>

    <BrowserRouter>
      <Routes11/>
      <Links/>
    </BrowserRouter>

    <Container>
    <Row>

      <Col md={6} className='border border-dark'>Col 1</Col>
      <Col>Col 2</Col>
      <Col>Col 3</Col>
    </Row>

    <Row>

      <Col>Col 1</Col>
      <Col>Col 2</Col>
      <Col>Col 3</Col>
    </Row>

    <Row>

      <Col>Col 1</Col>
      <Col>Col 2</Col>
      
    </Row>

  </Container>
    </>

 
  );
}

export default App;
