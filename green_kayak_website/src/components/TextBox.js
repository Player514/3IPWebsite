import React from 'react'
import '../styles/textbox.css'

function TextBox(props) {
    return(
        <div className="text-box">
            <p className="text-box-text">{props.text}</p>
        </div>
    )
}

export default TextBox