import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmpDetail() {

    const [empData,setEmpData] = useState();
    const navigate = useNavigate()

    useEffect(()=>{

        fetch("http://localhost:8000/employee")
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data)
           setEmpData(data)
        })


    },[])

    const LoadProfile = (id)=>{

        navigate("/employee/view/"+id)

    }



  return (
    <div> 

        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h1>Employee Details</h1>
                    <Link to="employee/create" className='btn btn-warning'>Add New (+)</Link>

                </div>

                <div className=' card-body'>
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>

                        <tbody>

                            {empData &&
                            empData.map((item)=>(
                                 <tr>
                                 <td>{item.id}</td>
                                 <td>{item.name}</td>
                                 <td>{item.email}</td>
                                 <td>{item.phone}</td>
                                 <td>
                                    <button className='btn btn-success me-2'>Edit</button>
                                    <button className='btn btn-danger me-2'>Delete</button>
                                    <button onClick={()=>{LoadProfile(item.id)}} className='btn btn-primary'>View Detail</button>
                                </td>
                                 </tr>

                            ))
                            }
                           

                        </tbody>
                    </table>

                </div>

            </div>
            </div>       
      
    </div>
  )
}

export default EmpDetail
