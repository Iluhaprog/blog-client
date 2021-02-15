import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './closeButton.scss';

function CloseButton(props) {
    return (
        <Button 
            text={props.text} 
            onClick={props.onClick} 
            style='close-button'  
        />
    );
}

CloseButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CloseButton;