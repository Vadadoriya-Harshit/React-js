import React, { useState ,useRef} from 'react';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function Dropdownfunc() {
  const [incAdult, setIncAdult] = useState(2); // Initial value for adults
  const [incChild, setIncChild] = useState(0); // Initial value for children
  const [incRoom, setIncRoom] = useState(1); // Initial value for rooms

  const incAdults = () => {
    if(incAdult<10)
    {
      setIncAdult(incAdult + 1);
    }
    else{
      alert("only 10 members allowed")
    }
  };

  const decAdults = () => {
    if (incAdult > 0) {
      setIncAdult(incAdult - 1);
    }
  };

  const incChilds = () => {
    setIncChild(incChild + 1);
  };

  const decChilds = () => {
    if (incChild > 0) {
      setIncChild(incChild - 1);
    }
  };

  const incRooms = () => {
    setIncRoom(incRoom + 1);
  };

  const decRooms = () => {
    if (incRoom > 0) {
      setIncRoom(incRoom - 1);
    }
  };
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.click();
    }
  };

  return (
        <Dropdown ref={dropdownRef}>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={"33px"} viewBox="0 0 24 24">
                  <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                </svg>
              </span>
              <span className='text-dark fs-lg-6 fs-5 fw-bold ps-3'>
                {incAdult} adults - {incChild} children - {incRoom} room
              </span>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className='col-12 p-3 shadow-lg'>
            <div className="container-fluid">
              <div className="col m-2">
                <div className="container-fluid">
                  <div className="row">
                    <div className='col-6 d-flex align-items-center'>
                      <span>Adults</span>
                    </div>
                    <div className="col-6">
                      <div className="container-fluid border border-1 border-dark d-flex">
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={decAdults}>-</button>
                        <span className='fs-6 pt-2'>
                          {incAdult}
                        </span>
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={incAdults}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col m-2">
                <div className="container-fluid">
                  <div className="row">
                    <div className='col-6 d-flex align-items-center'>
                      <span>Childrens</span>
                    </div>
                    <div className="col-6">
                      <div className="container-fluid border border-1 border-dark d-flex">
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={decChilds}>-</button>
                        <span className='fs-6 pt-2'>
                          {incChild}
                        </span>
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={incChilds}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col m-2">
                <div className="container-fluid">
                  <div className="row">
                    <div className='col-6 d-flex align-items-center'>
                      <span>Rooms</span>
                    </div>
                    <div className="col-6">
                      <div className="container-fluid border border-1 border-dark d-flex">
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={decRooms}>-</button>
                        <span className='fs-6 pt-2'>
                          {incRoom}
                        </span>
                        <button type="button" className="btn fs-5 px-3 border-0" onClick={incRooms}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className='btn btn-lg border border-2 border-primary col-12 text-primary' onClick={closeDropdown}>
                Done
              </button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
  )
}

export default Dropdownfunc;
