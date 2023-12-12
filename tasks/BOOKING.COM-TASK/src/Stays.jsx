import './App.css';
import data from './db/db.json'; 
import {Link} from "react-router-dom";
import Actions from './Actions';
import { useEffect, useState } from 'react';
function Stays() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(users => setData(users.users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <Actions />
    <h1>
        search results :-
    </h1>
   {
    data.map((el)=>(
        <ul>
            <li>{el.id}</li>
        </ul>
    ))
   }
       
    </>
  );
}

export default Stays;
