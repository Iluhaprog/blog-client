import React from 'react';
import PropTypes from 'prop-types';
import wave1 from '../../assets/post_card/wave1.png';
import wave2 from '../../assets/post_card/wave2.png';
import './wave.scss';

function Wave(props) {
    return (
        <div className="wave-box">
            <div className="wave-box__bg">
                { props.img && <img src={props.img} alt="post-preview" /> }
            </div>
            <div className="wave-box__effect">
                <div className="wave-box__item">
                    <img src={wave1} alt="wave1" />
                </div>
                <div className="wave-box__item">
                    <img src={wave2} alt="wave2" />
                </div>
                <div className="wave-box__item">
                    <img src={wave1} alt="wave3" />
                </div>
                <div className="wave-box__item">
                    <img src={wave2} alt="wave4" />
                </div>
            </div>
        </div>
    );
}

Wave.propTypes = {
    img: PropTypes.string,
};

export default Wave;