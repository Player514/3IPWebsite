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
        <TextField type={"text"} placeholder={"Enter your name"}/>
        <p>E-mail</p>
        <TextField type={"email"} placeholder={"Enter your e-mail"}/>
        <p>Phonenumber</p>
        <TextField type={"number"} placeholder={"Enter your phonenumber"}/> 
        <button onClick={() => navigate('/before-arrival')}>Next</button>
        </div>
      </div>
    );
  }

export default BookingPage