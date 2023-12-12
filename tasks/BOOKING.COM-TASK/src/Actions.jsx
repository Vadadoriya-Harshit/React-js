import React, { createContext, useContext } from 'react'
import { Container, Row, Col, InputGroup, Form, Button, CloseButton } from 'react-bootstrap';
import{ useState } from 'react';
import Cal from './Cal';
import { Link } from 'react-router-dom';
import Dropdownfunc from './Dropdown';
import search from './Home';


function Actions({userData}) {
  const input = useContext(search);
    const [freshVal, setfreshVal] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date);
  const [checkOutDate, setCheckOutDate] = useState(new Date);
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };
  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };   
  const handleFilterChange = (e) => {
    const newName = e.target.value;
    setfreshVal(newName.toLowerCase());
  };
  const fetchData = () => {
    if (freshVal !== '') {
     
      setTimeout(() => {
        const filteredCities = userData.filter(city =>
          city.name.toLowerCase().includes(freshVal)
        );
        setCities(filteredCities);
        setfreshVal("");
      }, 1000); 
        }
  };
  const [cities, setCities] = useState([]);
  return (
    <div>
      <Container className='bg-white' >
      <Row className="border">
        <Col lg={3} className="p-3 border border-lg-end border-warning border-3 d-flex justify-content-center align-items-center">
        <div>
                <InputGroup className=''>
                  <InputGroup.Text>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width='30px' height="30px" viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
        </span>
      </InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Where are you gong ?' value={freshVal} onChange={handleFilterChange} />
        <InputGroup.Text>
        <CloseButton onClick={()=>setfreshVal("")} />
        </InputGroup.Text>
       
               </InputGroup>
                </div>
        </Col>
        <Col lg={3} className="border border-lg-end border-warning border-3 d-flex justify-content-center align-items-center">
        <Cal
        onCheckInDateChange={handleCheckInDateChange}
        onCheckOutDateChange={handleCheckOutDateChange}
      />
        </Col>
        <Col lg={4} className="px -5 border border-lg-end border-warning border-3 d-flex justify-content-center align-items-center">
        <Dropdownfunc/>
        </Col>
        <Col lg={2} className="border border-lg-end border-warning border-3 d-flex justify-content-center align-items-center">
        <Link to={"/Stays"}>
          <button className='btn btn-primary btn-lg' onClick={fetchData}>
           Search 
          </button>
        </Link>
        </Col>
      </Row>
    </Container>
  {
    console.log(freshVal)
  }
    </div>
  )
}

export default Actions