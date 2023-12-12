import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpView() {

    const {empId} = useParams();
    console.log(empId)

    const [empData,setEmpData] = useState("");

    useEffect(()=>{

        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setEmpData(data)
        })
        .catch((err)=>{console.log(err.message)})
    })

  return (
    <div>
        <h1>id  : {empData.id}</h1>
        <h1>name  : {empData.name}</h1>
        <h1>email  : {empData.email}</h1>
        <h1>phone  : {empData.phone}</h1>
    </div>
  )
}

export default EmpView
