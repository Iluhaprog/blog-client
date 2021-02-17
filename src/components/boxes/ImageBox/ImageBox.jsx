import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../../containers';
import './imageBox.scss';

function ImageBox(props) {
    return (
        <div className="image-box">
            {
                props.img
                    ? (
                        <img src={props.img} alt='image' />
                    )
                    : ''
            }
            <div className="image-box__inner">
                <Column justifyContent='c' alignItems='c' >
                    {props.children}
                </Column>
            </div>
        </div>
    );
};

ImageBox.defaultProps = {
    img: '',
};

ImageBox.propTypes = {
    img: PropTypes.string,
    children: PropTypes.node,
};

export default ImageBox;

