import React from 'react'
import '../styles/textfield.css'

function TextField(props) {
    return(
        <div className="text-field">
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField