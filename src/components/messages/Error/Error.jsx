import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../containers';
import { CloseButton } from '../../buttons';
import './error.scss';

function Error(props) {
    return (
        <div className='error-box'>
            <Row>
                <p className='error-box__message'>
                    {props.message}
                </p>
                <CloseButton 
                    text='X'
                    onClick={props.onClose}
                />
            </Row>
        </div>
    );
}

Error.defaultProps = {
    onClose: () => {},
};

Error.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func,
};

export default Error;