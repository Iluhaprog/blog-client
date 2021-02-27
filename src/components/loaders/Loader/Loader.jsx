import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

function Loader(props) {
    const isVisible = props.visible ? 'loader_visible' : '';
    return (
        <div className={`loader ${isVisible} ${props.className}`}>
            {props.children}
        </div>
    );
}

Loader.defaultProps = {
    visible: false,
};

Loader.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
};

export default Loader;