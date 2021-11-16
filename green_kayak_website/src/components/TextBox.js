import React from 'react'
import '../styles/textbox.css'

function TextBox(props) {
    return(
        <div className="text-box">
            <p>{props.text}</p>
        </div>
    )
}

export default TextBox