import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../containers';
import { Toggler } from '../';
import './labeledToggler.scss';

function LabeledToggler(props) {
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
    );
}

LabeledToggler.defaltProps = {
    value: false,
    handleChange: () => {},
};

LabeledToggler.propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
};

export default LabeledToggler;