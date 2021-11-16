import React from 'react'
import RightArrow from '../assets/images/right-arrow.png'

function RightArrowButton(props) {
    return(
        <div className="right-arrow-button" onClick={props.onClick}>
            <img src={RightArrow} alt="next page button" />
        </div>
    )
}

export default RightArrowButton