import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Row } from '../../containers'
import './labeledButton.scss';

function LabeledButton(props) {
    return (
        <Button
            onClick={props.onClick}
            style='labeled-button'
        >
            <Row>
                <p>
                    <span></span>
                    <span></span>
                </p>
                <p>{props.text}</p>
            </Row>
        </Button>
    );
}

LabeledButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default LabeledButton;