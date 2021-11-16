import React from 'react'
import LeftArrow from '../assets/images/left-arrow.png'
import '../styles/buttons.css'

function LeftArrowButton(props) {
    return(
        <div className="left-arrow-button" onClick={props.onClick}>
            <img src={LeftArrow} alt="previous page button" className="left-arrow" />
        </div>
    )
}

export default LeftArrowButton