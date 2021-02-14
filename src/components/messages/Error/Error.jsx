import React from 'react';
import './error.scss';

export default props => (
    <div className='error-box'>
        <p className='error-box__message'>
            {props.message}
        </p>
    </div>
);