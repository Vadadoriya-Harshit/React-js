import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpView() {

    const {empId} = useParams();
    console.log(empId)
    const [empData,setEmpData] = useState("")   

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{
            console.log(res)
        })
    },[])
  return (
    <div>
        <h2>ID: {empData.id}</h2>

      
    </div>
  )
}

export default EmpView
