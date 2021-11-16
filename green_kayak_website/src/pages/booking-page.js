import React from 'react'
import { useNavigate } from 'react-router';
import TextField from '../components/TextField';
import '../styles/booking-page.css'


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="booking-page">
        <div className="booking-page-content">
        <h1>Booking</h1>
        <h3>Location: LETZ SUSHI Christianshavn, Overgarden Neden Vandet 41, 1414 København K </h3>
        <p>Name</p>
        <TextField />
        <p>E-mail</p>
        <TextField />
        <p>Phonenumber</p>
        <TextField /> 
        <button onClick={() => navigate('/before-arrival')}>Next</button>
        </div>
      </div>
    );
  }

export default BookingPage