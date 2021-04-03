import React from 'react';
import {DefaultToggle} from '../Default';
import {Eye, EyeSlash} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const VisibilityToggle = ({isVisible, show, hide}) => {
  return (
    <DefaultToggle
      theme={'primary'}
      condition={isVisible}
      onTrue={() => show()}
      onFalse={() => hide()}
      components={[Eye, EyeSlash]}
    />
  );
};

VisibilityToggle.propTypes = {
  isVisible: PropTypes.bool,
  show: PropTypes.func,
  hide: PropTypes.func,
};

export {VisibilityToggle};
