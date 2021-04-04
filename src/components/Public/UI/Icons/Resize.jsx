import React from 'react';
import {
  ReactComponent as ResizeIcon,
} from '../../../../assets/public/icons/resize.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Resize = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <ResizeIcon />
  </Icon>
);

Resize.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Resize};
