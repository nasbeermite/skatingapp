import React, { useState } from 'react';
import './BookingForm.css'; 

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [membership, setMembership] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [numAdmits, setNumAdmits] = useState(0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleMembershipChange = (event) => {
    setMembership(event.target.value);
  };

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleAdmitsChange = (event) => {
    setNumAdmits(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Booking submitted:', {
      selectedDate,
      membership,
      selectedSession,
      numAdmits,
    });
  };

  return (
    <div>
      <h5 className='title-bg'>BOOK NOW</h5>
      <div className="booking-container effect2">

      <form onSubmit={handleSubmit}>
        <div className="booking-field">
          <input
            type="date"
            id="selectDate"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="booking-field">
          <select id="membership" value={membership} onChange={handleMembershipChange}>
            <option value="">Select Membership</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="booking-field">
          <select id="selectSession" value={selectedSession} onChange={handleSessionChange}>
            <option value="">Select Session</option>
            <option value="session1">Session 1</option>
            <option value="session2">Session 2</option>
          </select>
        </div>
        <div className="booking-field">
          <input
            type="number"
            id="numAdmits"
            value={numAdmits}
            onChange={handleAdmitsChange}
            min={1}
            required
          />
        </div>
        <button className='form-button' type="submit">CHECK NOW</button>
      </form>
      </div>
    </div>
  );
};

export default BookingForm;
