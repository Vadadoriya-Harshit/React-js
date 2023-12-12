import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your desired theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Cal from './Cal'

function Box() {
  return (
    <Container className='text-white border border-5 border-warning col-10 bg-white'>
            <Row>
                <Col xs={12} md={4} className='border-5 border-end border-warning d-flex align-items-center'>
                <div>
                <InputGroup className=''>
                  <InputGroup.Text>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width='30px' height="30px" viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
        </span>
      </InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Where are you gong ?' value={Route} onChange={(e)=>setRoute(e.target.value)} /> 
        <InputGroup.Text>
        <CloseButton onClick={()=>setRoute(" ")} />
        </InputGroup.Text>
       
               </InputGroup>
                </div>
                </Col>
              <Col xs={12} md={4} className='border-5 border-end border-warning d-flex justify-content-center align-items-center'>
                <Cal />
              </Col>
              <Col xs={12} md={4}>
              <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic" className='text-dark'>
        Dropdown Button
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
       </Dropdown>
              </Col >
            </Row>
            </Container>
  )
}

export default Box