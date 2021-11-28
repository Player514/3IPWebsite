import React from 'react'
import { useNavigate } from 'react-router';
import TextField from '../components/TextField';
import '../styles/booking-page.css'


function BookingPage() {
    const navigate = useNavigate();

    return (
      <div className="booking-page">
        <div className="booking-page-text">
        <h1>BOOKING</h1>
        <h3>Location: LETZ SUSHI Christianshavn, Overgarden Neden Vandet 41, 1414 København K </h3>
        </div>
          <div className="text-field-area">
            <p>Name</p>
            <TextField type={"text"} placeholder={"Enter your name"}/>
            <p>E-mail</p>
            <TextField type={"email"} placeholder={"Enter your e-mail"}/>
            <p>Phonenumber</p>
            <TextField type={"phone"} placeholder={"Enter your phonenumber"}/> 
          </div>
          <div id="button-area">
          <button id="next-button" onClick={() => navigate('/before-arrival')}>NEXT</button>
          </div>
      </div>
    );
  }

export default BookingPage