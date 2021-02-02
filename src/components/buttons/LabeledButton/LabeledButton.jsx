import React from 'react';
import { Button } from '../Button';
import { Row } from '../../containers'
import './labeledButton.scss';

export default props => (
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
)