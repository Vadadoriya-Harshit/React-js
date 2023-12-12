import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpView() {

    const {empId} = useParams();
    console.log(empId);
    const [empData,setEmpData] = useState("")   

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{
            // console.log(res)
            return res.json();
        })
        .then((data)=>{
          //console.log(data)//
          console.log(data.id)
          console.log(data.name)
          setEmpData(data)
        })
    },[])
  return (
    <div>
        <h2>ID: {empData.id }</h2>
        <h2>Name: {empData.name}</h2>
        <h2>Email: {empData.email }</h2>
        <h2>Phone: {empData.phone }</h2>
        <h2>Active-user: {(empData.active )? "Yes" : "No!"}</h2>

      
    </div>
  )
}

export default EmpView
