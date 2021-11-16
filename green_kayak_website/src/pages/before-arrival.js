import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';
import LeftArrowButton from '../components/LeftArrowButton'
import BeforeArrivalImage from '../assets/images/before-on-arrival.png'
import TextBox from '../components/TextBox';
import '../styles/before-arrival.css'


function BeforeArrival() {
  const navigate = useNavigate();

    return (
      <div className="before-arrival">
        <div className="before-arrival-content">
          <h1>BEFORE ARRIVAL</h1>
            {/* replace this img resource with a gif component later */}
          <img src={BeforeArrivalImage} alt="before arrival placeholder" /> 

          <div className="text-box-area" >
          <TextBox text="Check Weather" />
          <TextBox text="Wear waterproof clothes" />
          <TextBox text="Doublecheck location" />
          </div>

          <div className="navigation-buttons">
            <LeftArrowButton onClick={() => navigate('/')} />
            <RightArrowButton onClick={() => navigate('/on-arrival')} />
          </div>
        </div>
      </div>
    );
  }

export default BeforeArrival