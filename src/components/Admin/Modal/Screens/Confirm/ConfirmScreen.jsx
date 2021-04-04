import React from 'react';
import {ModalScreen} from '../../Styled/ModalScreen';
import * as PropTypes from 'prop-types';
import {Button, Container, Row} from 'react-bootstrap';
import {CheckSquare, XSquare} from 'react-bootstrap-icons';

const ConfirmScreen = ({modal, theme, onSuccess, onClose}) => {
  return (
    <ModalScreen
      theme={theme}
      maxWidth={300}
      maxHeight={120}
    >
      <Container>
        <h6>{modal.title}</h6>
        <Row className='justify-content-between align-items-center'>
          <Button
            variant='success'
            onClick={() => onSuccess()}
          >
            <CheckSquare />
          </Button>
          <Button
            variant='danger'
            onClick={() => onClose()}
          >
            <XSquare />
          </Button>
        </Row>
      </Container>
    </ModalScreen>
  );
};

ConfirmScreen.propTypes = {
  modal: PropTypes.object,
  theme: PropTypes.string,
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
};

export {ConfirmScreen};
