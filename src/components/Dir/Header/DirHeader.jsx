import React from 'react';
import PropTypes from 'prop-types';
import {create} from '../../../store/directory/directoryActions';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../store/modal/ModalFormTypes';
import {connect} from 'react-redux';
import {Badge, Button, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';

let DirHeader = (props) => {
  const {lang} = props;
  const {showInputModal, create} = props;
  return (
    <Row className='justify-content-between align-items-center'>
      <h2>
        <Badge
          variant='secondary'
        >
          Directories
        </Badge>
      </h2>
      <Button
        onClick={() => showInputModal(
            lang.text.DIR_CREATE_TITLE,
            lang.text.DIR_CREATE_DESCRIPTION,
            (val) => create(val.title),
        )}
        variant='primary'
      >
        <FileEarmarkPlus />
      </Button>
    </Row>
  );
};

DirHeader.propTypes = {
  isFetch: PropTypes.bool,
  lang: PropTypes.object,
  create: PropTypes.func,
  showInputModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isFetch: state.post.isFetch,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  create: (name) => {
    dispatch(create({name}));
  },
  showInputModal: (title, description, successHandler) => {
    dispatch(initModal({
      title,
      description,
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.INPUT));
    dispatch(setVidible(true));
  },
});

DirHeader = connect(mapStateToProps, mapDispatchToProps)(DirHeader);

export {DirHeader};
