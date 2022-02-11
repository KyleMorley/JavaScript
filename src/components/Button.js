const Button = ({text, onClick, classes}) => {
    return (
        <button onClick={onClick} className={classes}>{text}</button>
    )
}

export default Button