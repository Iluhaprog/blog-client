import React from 'react';
import {
  ReactComponent as DirectoryIcon,
} from '../../../../assets/public/icons/directory.svg';
import PropTypes from 'prop-types';
import {Icon} from './Icon';

const Directory = ({width, height}) => (
  <Icon
    width={width}
    height={height}
  >
    <DirectoryIcon />
  </Icon>
);

Directory.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export {Directory};
