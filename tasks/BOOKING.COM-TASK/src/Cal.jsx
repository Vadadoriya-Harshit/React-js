import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Cal({ onCheckInDateChange, onCheckOutDateChange }) {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const handleCheckInDateChange = (e) => {
    const selectedDate = e.value;
    setCheckInDate(selectedDate);
    onCheckInDateChange(selectedDate);
  };

  const handleCheckOutDateChange = (e) => {
    const selectedDate = e.value;
    setCheckOutDate(selectedDate);
    onCheckOutDateChange(selectedDate);
  };

  return (
    <div className="date-range-picker text-dark p-2" style={{ display: "flex" }}>
      <div className="p-field">
        <label htmlFor="checkInDate">From</label>
        <Calendar
          id="checkInDate"
          value={checkInDate}
          onChange={handleCheckInDateChange}
          showIcon={true} // Instead of just "showIcon"
        />
      </div>
      <div className="p-field">
        <label htmlFor="checkOutDate">To</label>
        <Calendar
          id="checkOutDate"
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
          showIcon={true} // Instead of just "showIcon"
        />
      </div>
    </div>
  );
}

export default Cal;
