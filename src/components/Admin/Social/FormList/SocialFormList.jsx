import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  create,
  getAll,
  remove,
  update,
} from '../../../../store/social/socialActions';
import {Badge, Container, Row, Col, Button, Spinner} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {SocialForm} from '../Form';
import {ListBox} from './ListBox';

let SocialFormList = (props) => {
  const {lang, create, isFetch, getAll, socials} = props;

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Row className='justify-content-between align-items-center'>
        <Col>
          <h2>
            <Badge
              variant='secondary'
            >
              {lang.text.SOCIALS}
            </Badge>
          </h2>
        </Col>
        <Spinner
          style={{marginRight: '10px', opacity: +isFetch}}
          size='sm'
          animation='border'
          variant='light'
        />
        <Button
          variant='primary'
          onClick={() => create()}
        >
          <FileEarmarkPlus />
        </Button>
      </Row>
      <ListBox>
        {
          socials.map((social) => (
            <SocialForm
              key={social.id}
              id={+social.id}
              initialValues={{
                title: social.title,
                link: social.link,
                preview: social.preview,
              }}
              lang={lang}
              showFileModal={props.showFileModal}
              onUpdate={props.update}
              onDelete={props.remove}
            />
          ))
        }
      </ListBox>
    </Container>
  );
};

SocialFormList.propTypes = {
  create: PropTypes.func,
  getAll: PropTypes.func,
  showFileModal: PropTypes.func,
  update: PropTypes.func,
  remove: PropTypes.func,
  socials: PropTypes.array,
  isFetch: PropTypes.bool,
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isFetch: state.social.isFetch,
  socials: state.social.socials,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  create: () => {
    dispatch(create({
      title: Date.now(),
      preview: '',
      link: '',
    }));
  },
  getAll: () => {
    dispatch(getAll());
  },
  update: (social) => {
    dispatch(update(social));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
  showFileModal: (successHandler) => {
    dispatch(initModal({
      title: '',
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.FILE_SELECT));
    dispatch(setVidible(true));
  },
});

SocialFormList = connect(mapStateToProps, mapDispatchToProps)(SocialFormList);

export {SocialFormList};
