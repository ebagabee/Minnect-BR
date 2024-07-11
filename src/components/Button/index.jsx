import './button.css';

function Button({ background, color, width, height, content, weight, fontSize, border, display, radius }) {
    const buttonStyle = {
        backgroundColor: background,
        color: color,
        width: width,
        height: height,
        fontWeight: weight,
        fontSize: fontSize,
        borderRadius: radius ||"8px",
        border: border,
        padding: "8px",
        display: display || "block"
    }

    return (
        <button style={buttonStyle}>
            {content}
        </button>
    )
}

export default Button;