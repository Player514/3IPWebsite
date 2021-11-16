import React from 'react'
import { useNavigate } from 'react-router';
import '../styles/booking-page.css'


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="booking-page">
        <div className="booking-page-content">
        <button onClick={() => navigate('/before-arrival')}>Next</button>
        </div>
      </div>
    );
  }

export default BookingPage