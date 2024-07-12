import './button.css';
import React, { useState } from 'react';

function Button({ background, color, width, height, content, weight, fontSize, border, display, radius }) {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: background,
        color: color,
        width: width,
        height: height,
        fontWeight: weight,
        fontSize: fontSize,
        borderRadius: radius || "8px",
        border: border,
        padding: "8px",
        display: display || "block",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
    };

    const buttonHoverStyle = {
        backgroundColor: "lightgrey",
    };

    return (
        <button
            style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            {content}
        </button>
    );
}

export default Button;
