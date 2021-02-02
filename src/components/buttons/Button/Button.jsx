import React from 'react';
import './button.scss';

export default props => (
    <button 
        className={`button default-button ${props.style || ''}`} 
        onClick={props.onClick}>
        {props.text}
    </button>
);