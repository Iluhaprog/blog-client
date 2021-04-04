import React from 'react';
import {
  ReactComponent as AboutIcon,
} from '../../../../assets/public/icons/about.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const About = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <AboutIcon />
  </Icon>
);

About.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {About};
