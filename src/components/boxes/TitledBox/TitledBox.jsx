import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column, Container } from '../../containers';
import './titledBox.scss'

function TitledBox(props) {
    return (
        <div className='titled-box'>
            <Column>
                <h1 className='titled-box__title'>
                    {props.title}
                </h1>
                <Container>
                    <Row 
                        wrap='w' 
                        justifyContent='c'
                        alignItems='fs'
                    >
                        { props.children }
                    </Row>
                </Container>
            </Column>
        </div>
    );
}

TitledBox.defaultProps = {
    title: 'Title',
};

TitledBox.propTypes = {
    title: PropTypes.string,
};

export default TitledBox;