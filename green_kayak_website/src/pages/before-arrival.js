import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';
import LeftArrowButton from '../components/LeftArrowButton'
import BeforeArrivalImage from '../assets/images/before-on-arrival.png'
import NumberText from '../components/NumberText'
import ActiveDot from '../assets/images/active-dot.png'
import InactiveDot from '../assets/images/inactive-dot.png'
import '../styles/before-arrival.css'


function BeforeArrival() {
  const navigate = useNavigate();

    return (
      <div className="before-arrival">
        <div className="before-arrival-content">
        <div className="step-dots-area">
          <img className="active-dot" src={ActiveDot} alt="active-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          </div>

          <h1>BEFORE ARRIVAL</h1>
            {/* replace this img resource with a gif component later */}
          
          

          <div className="gif-area">
          <img src={BeforeArrivalImage} alt="before arrival placeholder" /> 
          </div>

          <div className="text-box-outline" >
            <div className="text-area">
            <NumberText number="1" text="Check Weather"/>
            <NumberText number="2" text="Wear waterproof clothes"/>
            <NumberText number="3" text="Doublecheck location"/>
            </div>
          </div>

          <div className="navigation-buttons">
            <LeftArrowButton onClick={() => navigate('/')} />
            <RightArrowButton onClick={() => navigate('/on-arrival')} />
          </div>
          <div className="button-area">
            <button id="book" disabled="true" onClick={() => alert('Disabled')}>Book</button>
          </div>
        </div>
      </div>
    );
  }

export default BeforeArrival