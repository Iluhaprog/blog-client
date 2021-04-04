import React from 'react';
import {
  ReactComponent as FloppyIcon,
} from '../../../../assets/public/icons/floppy.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Floppy = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <FloppyIcon />
  </Icon>
);

Floppy.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Floppy};
