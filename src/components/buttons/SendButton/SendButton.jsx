import React from 'react';
import PropTypes from 'prop-types';
import './sendButton.scss';

function SendButton(props) {
    return (
        <button className='button send-button' onClick={props.onClick}>
            {props.text}
        </button>
    );
}

SendButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default SendButton;