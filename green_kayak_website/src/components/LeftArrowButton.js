import React from 'react'
import LeftArrow from '../assets/images/Left-arrow.png'

function LeftArrowButton(props) {
    return(
        <div className="Left-arrow-button" onClick={props.onClick}>
            <img src={LeftArrow} alt="previous page button" />
        </div>
    )
}

export default LeftArrowButton