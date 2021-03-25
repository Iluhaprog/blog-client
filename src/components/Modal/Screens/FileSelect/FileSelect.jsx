import React from 'react';
import {ModalScreen} from '../../Styled/ModalScreen';
import PropTypes from 'prop-types';
import {Button, Container, Row} from 'react-bootstrap';
import {XSquare} from 'react-bootstrap-icons';
import {FileList} from './FilesList';

const FileSelectScreen = ({theme, onClose, onSuccess}) => {
  return (
    <ModalScreen theme={theme} maxWidth={700} maxHeight={500}>
      <Container>
        <Row className='justify-content-between'>
          <p>Files</p>
          <Button
            variant={'danger'}
            onClick={() => onClose()}
          >
            <XSquare/>
          </Button>
        </Row>
        <FileList onSelect={onSuccess}/>
      </Container>
    </ModalScreen>
  );
};

FileSelectScreen.propTypes = {
  theme: PropTypes.string,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
};

export {FileSelectScreen};
