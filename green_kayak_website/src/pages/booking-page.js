import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="BookingPage">
        <div className="booking-page-content">
        <header className="BookingPage-header">
          <h2>
            Booking Page
          </h2>
        </header>
        <RightArrowButton onClick={() => navigate('/before-arrival')} />
        </div>
      </div>
    );
  }

export default BookingPage