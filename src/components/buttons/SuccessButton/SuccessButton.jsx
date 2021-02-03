import React from 'react';
import { Button } from '../Button';
import './successButton.scss';

export default props => (
    <Button 
        text={props.text}
        onClick={props.onClick}
        style='success-button'
    />
);