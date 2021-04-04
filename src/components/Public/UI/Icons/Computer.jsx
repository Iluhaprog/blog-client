import React from 'react';
import {
  ReactComponent as ComputerIcon,
} from '../../../../assets/public/icons/computer.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Computer = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <ComputerIcon />
  </Icon>
);

Computer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Computer};
