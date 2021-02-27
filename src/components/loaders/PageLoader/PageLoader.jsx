import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader';
import './pageLoader.scss';

function PageLoader(props) {
    return (
        <Loader visible={props.visible} className='loader__big'>
            <div className='page-loader'>
                <h2 className='page-loader__title'>Hello!</h2>
                <h3 className='page-loader__subtitle'>
                    Welcome to my blog!
                </h3>
                <div className='page-loader__animation'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Loader>
    );
}

PageLoader.propTypes = {
    visible: PropTypes.bool,
};

export default PageLoader;