import React from 'react';
import {connect} from 'react-redux';
import {Badge, Button, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';
import {create} from '../../../../store/project/projectActions';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import PropTypes from 'prop-types';

let ProjectHeader = ({
  lang,
  showInputModal,
  create,
}) => {
  return (
    <Row className='justify-content-between align-items-center'>
      <h2>
        <Badge
          variant={'secondary'}
        >
          {lang.adminNav.PROJECTS}
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

ProjectHeader.propTypes = {
  isFetch: PropTypes.bool,
  lang: PropTypes.object,
  showInputModal: PropTypes.func,
  create: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});
const mapDispatchToProps = (dispatch) => ({
  create: (title) => {
    dispatch(create({
      title,
      description: '',
      preview: '',
      projectLink: '',
      githubLink: '',
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

ProjectHeader = connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);

export {ProjectHeader};
