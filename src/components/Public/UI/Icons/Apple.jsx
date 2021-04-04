import React from 'react';
import {
  ReactComponent as AppleIcon,
} from '../../../../assets/public/icons/apple.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Apple = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <AppleIcon />
  </Icon>
);

Apple.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Apple};
