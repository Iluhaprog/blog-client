import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './primaryButton.scss';

function PrimaryButton(props) {
    return (
        <Button 
            text={props.text} 
            onClick={props.onClick} 
            style='primary-button'    
        />
    );
}

PrimaryButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default PrimaryButton;