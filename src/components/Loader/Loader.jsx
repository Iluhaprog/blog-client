import React from 'react';
import loader from '../../assets/loader.svg';
import './loader.scss';

export default props => (
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