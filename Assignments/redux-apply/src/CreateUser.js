import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from './UserReducer'; // Assuming 'addUsers' is an action creator
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    // State variables for user input fields
    const [id, setID] = useState(""); // Assuming ID is managed internally
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Accessing users data from Redux store
    const users = useSelector(state => state.xyz); // Replace 'xyz' with your actual slice name
    console.log(users);

    // Accessing dispatch function to dispatch actions to Redux store
    const dispatch = useDispatch();

    // Accessing the navigation functionality from React Router DOM
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatching an action to add a new user with entered details
        dispatch(addUsers({ id: users[users.length - 1].id + 1, name, email }));
        
        // Navigating back to the home page after adding the user
        navigate('/');
    };

    return (
        <div>
            <div className='row justify-content-center text-start'>
                <div className='col-6'>
                    <form className='container mt-5' onSubmit={handleSubmit}>
                        <h4>Create User</h4>
                        <div className='col-12'>
                            {/* Input field for ID (Assuming it's disabled and managed internally) */}
                            <label className='form-label'>Id</label>
                            <input disabled="disabled" className='form-control'></input>
                        </div>
                        <div className='col-12'>
                            {/* Input field for Name */}
                            <label className='form-label'>Name</label>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} className='form-control'></input>
                        </div>
                        <div className='col-12'>
                            {/* Input field for Email */}
                            <label className='form-label'>Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control'></input>
                        </div>
                        <div className='col-12 mt-4'>
                            {/* Button to save user details */}
                            <button className='btn btn-success me-2'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
