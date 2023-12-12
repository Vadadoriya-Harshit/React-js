
import React  from "react";

class Ex1 extends React.Component
{
 
  render()
  {
    return(
      <>
        <h1>Class</h1>
      
      </>
    )
  }


    }

function Harshit()
{
  return (
    <>
      <h3>THIS IS Another Function</h3>
      {/* <Ex1/> */}
    
    
    </>
  )
}



function Test() {
  return (
   <>
    <h1 >HEllo React App</h1>
    <Harshit/>
    <Ex1/>
   
   </>
   
  );
}

export default Test;

