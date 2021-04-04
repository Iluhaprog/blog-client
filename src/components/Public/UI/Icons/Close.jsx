import React from 'react';
import {
  ReactComponent as CloseIcon,
} from '../../../../assets/public/icons/close.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Close = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <CloseIcon />
  </Icon>
);

Close.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Close};
