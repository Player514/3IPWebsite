import React from 'react'
import { useNavigate } from 'react-router';
import LeftArrowButton from '../components/LeftArrowButton'
import OnReturnImage from '../assets/images/on-return.png'
import NumberText from '../components/NumberText'
import ActiveDot from '../assets/images/active-dot.png'
import InactiveDot from '../assets/images/inactive-dot.png'
import '../styles/on-return.css'


function OnReturn() {
  const navigate = useNavigate();

    return (
      <div className="on-return">
        <div className="on-return-content">
        <div className="step-dots-area">
          <img className="active-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={ActiveDot} alt="active-step" />
          </div>

          <h1>ON RETURN</h1>

          <div className="gif-area">
          <img src={OnReturnImage} alt="before arrival placeholder" /> 
          </div>

          <div className="text-box-outline" >
            <div className="text-area">
            <NumberText number="1" text="Weight trash and write it down"/>
            <NumberText number="2" text="Sort trash and bring it inside"/>
            <NumberText number="3" text="Check equipment - report if damaged"/>
            </div>
          </div>

          <div className="navigation-buttons">
            <LeftArrowButton onClick={() => navigate('/while-kayaking')} />
          </div>
          <div className="button-area">
            <button id="book" onClick={() => alert('Booking successfull. Check your email for confirmation')}>Book</button>
          </div>
        </div>
      </div>
    );
  }

export default OnReturn