import React from 'react';
import PropTypes from 'prop-types';
import { Field } from "redux-form";
import './textarea.scss';

function Textarea(props) {
    return (
        <>
            <Field
                className='textarea'
                name={props.name} 
                placeholder={props.placeholder}
                component='textarea'
            />
        </>
    );
};

Textarea.defaultProps = {
    placeholder: '',
};

Textarea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Textarea;