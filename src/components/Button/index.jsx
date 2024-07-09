import './button.css';

function Button({ background, color, width, height, content, weight, fontSize }) {
    const buttonStyle = {
        backgroundColor: background,
        color: color,
        width: width,
        height: height,
        fontWeight: weight,
        fontSize: fontSize,
        borderRadius: "8px",
        border: "none"
    }

    return (
        <button style={buttonStyle}>
            {content}
        </button>
    )
}

export default Button;