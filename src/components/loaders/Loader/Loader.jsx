import React from 'react';
import PropTypes from 'prop-types';
import loader from '../../../assets/loader.svg';
import './loader.scss';

function Loader(props){
    return (
        <>
            <img 
                src={loader}
                width={props.width || 30}
                height={props.height || 30} 
                className={`loader ${props.visible ? 'loader_visible' : ''}`}
                alt='loading...'     
            />
        </>
    );
}

Loader.defaultProps = {
    width: 30,
    height: 30,
    visible: false,
};

Loader.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    visible: PropTypes.bool,
};

export default Loader;