import React from 'react'
import '../styles/textbox.css'

function TextField(props) {
    return(
        <div className="text-field">
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default TextField