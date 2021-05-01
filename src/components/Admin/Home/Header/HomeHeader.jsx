import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {create} from '../../../../store/home/homeActions';
import {
  initModal,
  setFormType,
  setVisible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {Badge, Button, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';

let HomeHeader = (props) => {
  const {lang, create, showInputModal, locales} = props;
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
            (val) => create(val.title, locales),
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
  locales: PropTypes.array,
  create: PropTypes.func,
  showInputModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  locales: state.locale.array,
});

const mapDispatchToProps = (dispatch) => ({
  create: (title, locales) => {
    dispatch(create({
      homeData: locales.map((locale) => ({
        title: title,
        description: '',
        locale: locale,
      })),
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
    dispatch(setVisible(true));
  },
});

HomeHeader = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

export {HomeHeader};
