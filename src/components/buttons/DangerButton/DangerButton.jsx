import React from 'react';
import { Button } from '../Button';
import './dangerButton.scss';

export default props => (
    <Button 
        text={props.text} 
        onClick={props.onClick} 
        style='danger-button'    
    />
);