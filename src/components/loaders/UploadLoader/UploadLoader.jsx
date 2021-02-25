import React from 'react';
import PropTypes from 'prop-types';
import loader from '../../../assets/loader.svg';
import './uploadLoader.scss';

function UploadLoader(props){
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

UploadLoader.defaultProps = {
    width: 30,
    height: 30,
    visible: false,
};

UploadLoader.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    visible: PropTypes.bool,
};

export default UploadLoader;