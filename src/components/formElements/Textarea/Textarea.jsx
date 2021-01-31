import React from 'react';
import { Field } from "redux-form";
import './textarea.scss';

export default props => (
    <>
        <Field
            className='textarea'
            name={props.name} 
            placeholder='Bio'
            component='textarea'
        />
    </>
);