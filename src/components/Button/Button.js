import React from 'react'
const Button = ({ text, variation, link, target, disabled=false}) => {
    return (
        <div className={`block-button button-v${variation} ${disabled ? 'disabled' : ''}`}>
            <a href={link} target={target} className='block-button__link'>{text}</a>
        </div>
    )
}

export default Button;