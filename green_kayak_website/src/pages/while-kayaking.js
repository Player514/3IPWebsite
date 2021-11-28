import React from 'react'
import { useNavigate } from 'react-router';
import RightArrowButton from '../components/RightArrowButton';
import LeftArrowButton from '../components/LeftArrowButton'
import WhileKayakingImage from '../assets/images/while-kayaking.png'
import NumberText from '../components/NumberText'
import ActiveDot from '../assets/images/active-dot.png'
import InactiveDot from '../assets/images/inactive-dot.png'
import '../styles/while-kayaking.css'


function WhileKayaking() {
  const navigate = useNavigate();

    return (
      <div className="while-kayaking">
        <div className="while-kayaking-content">
        <div className="step-dots-area">
          <img className="active-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          <img className="inactive-dot" src={ActiveDot} alt="active-step" />
          <img className="inactive-dot" src={InactiveDot} alt="inactive-step" />
          </div>

          <h1>WHILE KAYAKING</h1>
            {/* replace this img resource with a gif component later */}
          
          

          <div className="gif-area">
          <img src={WhileKayakingImage} alt="before arrival placeholder" /> 
          </div>

          <div className="text-box-outline" >
            <div className="text-area">
            <NumberText number="1" text="Hunt Trash"/>
            <NumberText number="2" text="Stay away from boats"/>
            <NumberText number="3" text="Return back in time"/>
            <NumberText number="4" text="Take pictures"/>
            </div>
          </div>

          <div className="navigation-buttons">
            <LeftArrowButton onClick={() => navigate('/on-arrival')} />
            <RightArrowButton onClick={() => navigate('/on-return')} />
          </div>
          <div className="button-area">
            <button id="book" disabled="true" onClick={() => alert('Disabled')}>Book</button>
          </div>
        </div>
      </div>
    );
  }

export default WhileKayaking