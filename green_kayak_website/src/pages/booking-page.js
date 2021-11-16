import React from 'react'
import { useNavigate } from 'react-router';
import TextBox from '../components/TextBox';
import '../styles/booking-page.css'


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="booking-page">
        <div className="booking-page-content">
        <TextBox text="Check Weather" />
        <button onClick={() => navigate('/before-arrival')}>Next</button>
        </div>
      </div>
    );
  }

export default BookingPage