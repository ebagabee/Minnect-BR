import './button.module.css';

function Button({ background, color, width, height, content }) {
    const buttonStyle = {
        backgroundColor: background,
        color: color,
        width: width,
        height: height,
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