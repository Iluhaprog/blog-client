import React from 'react';
import {ModalScreen} from '../../Styled/ModalScreen';
import {Button} from 'react-bootstrap';
import {XSquare} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const DefaultScreen = ({theme, onClose}) => {
  return (
    <ModalScreen maxWidth={200} maxHeight={100} theme={theme}>
      <Button
        variant={'danger'}
        onClick={() => onClose()}
      >
        <XSquare />
      </Button>
      <p>
        Default modal screen
      </p>
    </ModalScreen>
  );
};

DefaultScreen.propTypes = {
  onClose: PropTypes.func,
  theme: PropTypes.string,
};

export {DefaultScreen};
