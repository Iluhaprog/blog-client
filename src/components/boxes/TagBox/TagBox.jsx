import React from 'react';
import PropTypes from 'prop-types';
import './tagBox.scss';

function TagBox(props) {
    return (
        <li className={`tag ${props.mode}`}>
            { props.title }
        </li>
    );
}

TagBox.defaultProps = {
    title: '',
    mode: '',
};

TagBox.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.string,
};

export default TagBox;