import React from 'react';
import { Row } from '../../containers';
import { Toggler } from '../';
import './labeledToggler.scss';

export default props => {
    return (
        <Row>
            <p className={`toggler-title ${ props.value ? 'toggler-title__visible' : ''}`}>
                {props.label}
            </p>
            <Toggler 
                value={props.value}
                onChange={props.handleChange}
            />
        </Row>
    )
}