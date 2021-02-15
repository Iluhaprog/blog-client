import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './dangerButton.scss';

function DangerButton(props) {
    return (
        <Button 
            text={props.text} 
            onClick={props.onClick} 
            style='danger-button'    
        />
    );
};

DangerButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default DangerButton;