import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button(props) {
    return (
        <button 
            className={`button default-button ${props.style}`} 
            onClick={props.onClick}
        >
            {props.text}
            {props.children}
        </button>
    );
}

Button.defaultProps = {
    style: '',
};

Button.propTypes = {
    style: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.node,
};

export default Button;