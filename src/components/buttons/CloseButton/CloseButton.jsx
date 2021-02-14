import React from 'react';
import { Button } from '../Button';
import './closeButton.scss';

export default props => (
    <Button 
        text={props.text} 
        onClick={props.onClick} 
        style='close-button'  
    />
);