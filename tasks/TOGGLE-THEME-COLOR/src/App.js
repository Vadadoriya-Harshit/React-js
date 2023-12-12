import React, { createContext, useContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const BoxValueContext = createContext();
const ModeChangeContext = createContext();

function Form() {
  const [currentUserName, setCurrentUserName] = useState('');
  const [mode, setMode] = useState('bg-white text-dark');

  const toggleMode = () => {
    setMode(prevColor =>
      prevColor === 'bg-white text-dark' ? 'bg-dark text-white' : 'bg-white text-dark'
    );
  };

  return (
    <BoxValueContext.Provider value={{ currentUserName, setCurrentUserName }}>
      <ModeChangeContext.Provider value={{ mode, toggleMode }}>
        <LoginForm />
      </ModeChangeContext.Provider>
    </BoxValueContext.Provider>
  );
}

function LoginForm() {
  const { currentUserName, setCurrentUserName } = useContext(BoxValueContext);
  const { mode, toggleMode } = useContext(ModeChangeContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = `${firstName} ${lastName}`;
  const canLogin = firstName !== '' && lastName !== '';
  const canLogin1 = firstName !== '';

  const onLogin = () => {
    setCurrentUserName(fullName);
    setFirstName('');
    setLastName('');
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
  };

  return (
    <div className={`${mode} shadow p-5 col-3 m-auto mt-5 d-flex justify-content-center`}>
      <div>
        <h1>Register Form</h1>
        <br />
        <label htmlFor="">First Name :-</label>
        <br />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Last Name :-</label>
        <br />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <br />
        <div className='d-block m-2'>
          <input type="checkbox" onChange={toggleMode} />
          &emsp; Change Mode
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {canLogin ? (
                <button className='d-block m-3 btn btn-info text-white' onClick={onLogin}>
                  Register
                </button>
              ) : (
                <button className='d-block m-3 btn btn-info text-white' disabled>
                  Register
                </button>
              )}
            </div>
            <div className="col-6">
              <button className='btn btn-info text-white d-block m-3' onClick={resetForm}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
