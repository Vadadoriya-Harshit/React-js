import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux to access the Redux store state
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation

function Home() {
    // Accessing data from the Redux store using useSelector
    const users = useSelector(state => state.xyz); // Replace 'xyz' with your actual slice name
    console.log(users); // Logging the retrieved user data

    return (
        <div className='container'>
            {/* Displaying header and link to add new user */}
            <h4 className='my-2'> Users data</h4>
            <Link to="/create" className='btn btn-info my-2'> Add New(+)</Link>

            {/* Displaying user data in a table */}
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        {/* Table headers */}
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping through users data and displaying it in rows */}
                    {users.map((items) => (
                        <tr key={items.id}> {/* Adding key prop for each row */}
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>
                                {/* Buttons for edit and delete */}
                                <button className='btn btn-success me-2'>Edit</button>
                                <button className='btn btn-danger me-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
