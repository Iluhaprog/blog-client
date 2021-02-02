import React from 'react';
import './dangerButton.scss';

export default props => (
    <button className='button danger-button' onClick={props.onClick}>
        {props.text}
    </button>
);