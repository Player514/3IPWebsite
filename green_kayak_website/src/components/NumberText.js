import '../styles/numbertext.css'

function NumberText(props) {
    return(
    <div className="number-text-container">
        <div className="number-area">
        <p>{props.number}</p>
        </div>
        <div className="text-area">
        <p>{props.text}</p>
        </div>
    </div>
    )
}

export default NumberText