import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Badge, Button} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../store/modal/ModalFormTypes';
import {create} from '../../../store/post/postActions';

let PostHeader = (props) => {
  const {lang} = props;
  const {showInputModal, create} = props;
  return (
    <Row className='justify-content-between align-items-center'>
      <h2>
        <Badge
          variant='secondary'
        >
          {lang.adminNav.POSTS}
        </Badge>
      </h2>
      <Button
        onClick={() => showInputModal(
            lang.text.POST_CREATE_TITLE,
            lang.text.POST_CREATE_DESCRIPTION,
            (val) => create(val.title),
        )}
        variant='primary'
      >
        <FileEarmarkPlus />
      </Button>
    </Row>
  );
};

PostHeader.propTypes = {
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
  create: (title) => {
    dispatch(create({
      title,
      text: '',
      preview: '',
      description: '',
      tags: [],
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

PostHeader = connect(mapStateToProps, mapDispatchToProps)(PostHeader);

export {PostHeader};
