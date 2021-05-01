import React from 'react';
import {connect} from 'react-redux';
import {Badge, Button, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';
import {create} from '../../../../store/project/projectActions';
import {
  initModal,
  setFormType,
  setVisible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import PropTypes from 'prop-types';

let ProjectHeader = ({
  lang,
  locales,
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
            (val) => create(val.title, locales),
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
  locales: PropTypes.array,
  showInputModal: PropTypes.func,
  create: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  locales: state.locale.array,
});
const mapDispatchToProps = (dispatch) => ({
  create: (title, locales) => {
    dispatch(create({
      projectData: locales.map((locale) => ({
        title: title,
        description: '',
        locale: locale,
      })),
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
    dispatch(setVisible(true));
  },
});

ProjectHeader = connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);

export {ProjectHeader};
