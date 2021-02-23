import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../../containers';
import './descriptionBox.scss';

function DescriptionBox(props) {
    return (
        <div className='description-box'>
            <Column>
                <h1 className='description-box__title'>
                    { props.title }
                </h1>
                <p className='description-box__description'>
                    { props.description }
                </p>
                { props.children }
            </Column>
        </div>
    );
}

DescriptionBox.defaultProps = {
    description: '',
    title: '',
};

DescriptionBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};

export default DescriptionBox;
