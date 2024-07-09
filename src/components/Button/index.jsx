import './button.css';

function Button({ background, color, width, height, content, weight, fontSize, border }) {
    const buttonStyle = {
        backgroundColor: background,
        color: color,
        width: width,
        height: height,
        fontWeight: weight,
        fontSize: fontSize,
        borderRadius: "8px",
        border: border,
        padding: "8px"
    }

    return (
        <button style={buttonStyle}>
            {content}
        </button>
    )
}

export default Button;