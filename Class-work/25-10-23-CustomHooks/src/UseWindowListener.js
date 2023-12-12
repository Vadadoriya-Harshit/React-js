import { useEffect } from "react"

function UseWindowListener(eType,fName)
{

   
        useEffect(()=>{

            window.addEventListener(eType,fName)
        },[eType,fName])
    
}

export default UseWindowListener;