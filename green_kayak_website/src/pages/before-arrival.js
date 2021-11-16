import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';
import '../styles/before-arrival.css'


function BeforeArrival() {
  const navigate = useNavigate();

    return (
      <div className="before-arrival">
        <div className="before-arrival-content">
        <RightArrowButton onClick={() => navigate('/on-arrival')} />
        </div>
      </div>
    );
  }

export default BeforeArrival