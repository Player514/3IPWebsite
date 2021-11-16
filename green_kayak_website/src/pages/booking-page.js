import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="BookingPage">
        <header className="BookingPage-header">
          <h2>
            Demo page
          </h2>
        </header>
        <RightArrowButton onClick={() => navigate('/before-arrival')} />
      </div>
    );
  }

export default BookingPage