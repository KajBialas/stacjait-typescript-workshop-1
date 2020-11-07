import React from 'react';
import { ButtonType } from "./Counter1";

type ButtonProps = {
    text: ButtonType;
    handleClick: () => void;
}
function Button({text, handleClick}: ButtonProps) {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default Button;