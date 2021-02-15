import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './successButton.scss';

function SuccessButton(props) {
    return (
        <Button 
            text={props.text}
            onClick={props.onClick}
            style='success-button'
        />
    );
}

SuccessButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default SuccessButton;