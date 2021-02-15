import React from 'react';
import PropTypes from 'prop-types';
import { Field } from "redux-form";
import './labeledInput.scss';

function LabeledInput(props) {
    return (
        <div className='form__box row-reverse'>
            <Field 
                type={props.type}
                name={props.name}
                component={props.component}
            />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    );
};

LabeledInput.defaultProps = {
    type: 'text',
    component: 'input',
};

LabeledInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default LabeledInput;