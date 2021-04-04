import React from 'react';
import {
  ReactComponent as ArrowIcon,
} from '../../../../assets/public/icons/scroll-arrow.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Arrow = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <ArrowIcon />
  </Icon>
);

Arrow.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Arrow};
