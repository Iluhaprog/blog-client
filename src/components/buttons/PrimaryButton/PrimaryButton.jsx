import React from 'react';
import { Button } from '../Button';
import './primaryButton.scss';

export default props => (
    <Button 
        text={props.text} 
        onClick={props.onClick} 
        style='primary-button'    
    />
);