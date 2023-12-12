import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import UseWindowListener from './UseWindowListener';

function App() {


  const[pos,setPos] = useState({x:0,y:0});

 UseWindowListener("pointermove",(e)=>{

  setPos({
    x:e.clientX,
    y:e.clientY
  })

 })

  return (
    <div style={{
      height:"20px",
      width:"20px",
      background:"#000",
      transform:`translate(${pos.x}px,${pos.y}px)`
    }}>
    
    </div>
  );
}

export default App;
