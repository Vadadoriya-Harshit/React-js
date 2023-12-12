import React, { createContext, useState } from 'react';
import SignIn from './Loginform';
import Register from './Signup';
import signupval from './Signup'
import { useContext } from 'react';
const RegContext = createContext();
const LogContext = createContext();

function Setform() {
  const [regShow, setRegShow] = useState(true);
  
  return ( 
      <>  
      <Register /> 
      
     </>
  );
}

export default Setform;
