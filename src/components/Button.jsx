import "./Button.css"

const Button = ({ type, text }) => {
    return (
        <button className={`Button Button_${type}`}>{text}</button>
    )

}

export default Button

