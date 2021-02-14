import React from 'react';
import { Row } from '../../containers';
import { CloseButton } from '../../buttons';
import './error.scss';

export default props => (
    <div className='error-box'>
        <Row>
            <p className='error-box__message'>
                {props.message}
            </p>
            <CloseButton 
                text='X'
                onClick={props.onClose}
            />
        </Row>
    </div>
);