import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {create} from '../../../../store/home/homeActions';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {Badge, Button, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';

let HomeHeader = (props) => {
  const {lang, create, showInputModal} = props;
  return (
    <Row className='justify-content-between align-items-center'>
      <h2>
        <Badge
          variant={'secondary'}
        >
          {lang.adminNav.HOMES}
        </Badge>
      </h2>
      <Button
        onClick={() => showInputModal(
            lang.text.PROJECT_CREATE_TITLE,
            lang.text.PROJECT_CREATE_DESCRIPTION,
            (val) => create(val.title),
        )}
        variant='primary'
      >
        <FileEarmarkPlus />
      </Button>
    </Row>
  );
};

HomeHeader.propTypes = {
  lang: PropTypes.object,
  create: PropTypes.func,
  showInputModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  create: (title) => {
    dispatch(create({
      title,
      description: '',
      selected: false,
    }));
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

HomeHeader = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

export {HomeHeader};
