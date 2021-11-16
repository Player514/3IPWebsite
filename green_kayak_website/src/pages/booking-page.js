import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';
import TextBox from '../components/TextBox';
import '../styles/booking-page.css'


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="BookingPage">
        <header className="BookingPage-header">
          <h2>
            Booking Page
          </h2>
        </header>
        <div className="booking-page-content">
        <TextBox text="Check Weather" />
        <RightArrowButton onClick={() => navigate('/before-arrival')} />
        </div>
      </div>
    );
  }

export default BookingPage