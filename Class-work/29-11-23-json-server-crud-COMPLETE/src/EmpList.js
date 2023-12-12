import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EmpList() {
    const [empData,setEmpData] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
  
      fetch("http://localhost:8000/employee")
      .then((res)=>{
        console.log(res)
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        setEmpData(data)
      })
      .catch((err)=>{})
  
  
    },[]);

    const LoadView = (id)=>{
        navigate("/emplyoee/view/"+id)
    }

    const LoadEdit = (id)=>{
        navigate("/emplyoee/edit/"+id)
    }

    const LoadDelete = (id)=>{

        if(window.confirm("Are you sure"))
        {

            fetch("http://localhost:8000/employee/"+id,{
                method:"DELETE",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(empData)
            })
            .then((res)=>{
                // return res.json();
               if(res)
               {
                alert("Deleted..!");
                // navigate('/')
                window.location.reload();
               }
            })
          

        }
        
    }
  
    return (
      <div className="App">
        
        <h3 >Employee Details</h3>
  
        <div>
          <Link to="/emplyoee/create" className='btn btn-primary m-3'>Add New (+)</Link>
        </div>
  
        <div className='container'>
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
   
   {empData && empData.map((item)=>(
  
    // console.log(item);
    // console.log(item.id);
    // console.log(item.name);
    // console.log(item.email);
    // console.log(item.phone);
  
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
  
      <td>
        <button onClick={()=>{LoadEdit(item.id)}} className='btn btn-success me-2'>Edit</button>
        <button onClick={()=>{LoadDelete(item.id)}} className='btn btn-danger me-2'>Delete</button>
        <button onClick={()=>{LoadView(item.id)}} className='btn btn-warning'>View</button>
      </td>
  
    </tr>
   ))}
  
    
  </tbody>
  </table>
        </div>
       
  
      </div>
    );
}

export default EmpList
