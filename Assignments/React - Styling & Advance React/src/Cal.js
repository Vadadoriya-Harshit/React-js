import React, { createContext, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const UserDataContext  = createContext(); // Updated the variable name and capitalized it

function Cal() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.value);
  };

  return (
    <UserDataContext.Provider value={{ checkInDate, checkOutDate }}>
      <div className="date-range-picker text-dark p-2" style={{ display: "flex" }}>
        <div className="p-field">
          <label htmlFor="checkInDate">From</label>
          <Calendar
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
            showIcon
          />  
        </div>
        <div className="p-field">
          <label htmlFor="checkOutDate">To</label>
          <Calendar
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            showIcon
          />
        </div>
      </div>
    </UserDataContext.Provider>
  );
}

export default Cal;
