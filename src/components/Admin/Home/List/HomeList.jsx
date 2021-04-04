import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {getAll, remove, update} from '../../../../store/home/homeActions';
import {connect} from 'react-redux';
import {HomeUpdateForm} from '../UpdateForm';

let HomeList = (props) => {
  const {homes, theme, lang, update, remove, getAll} = props;

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Row>
      {
        homes?.map((home) => (
          <Col md={12} key={home.id}>
            <HomeUpdateForm
              theme={theme}
              lang={lang}
              initialValues={home}
              update={update}
              remove={() => remove(home.id)}
            />
          </Col>
        ))
      }
    </Row>
  );
};

HomeList.propTypes = {
  homes: PropTypes.array,
  theme: PropTypes.string,
  lang: PropTypes.object,
  update: PropTypes.func,
  getAll: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state) => ({
  homes: state.home.homes,
  theme: state.settings.theme,
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({
  getAll: () => {
    dispatch(getAll());
  },
  update: (home) => {
    dispatch(update(home));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

HomeList = connect(mapStateToProps, mapDispatchToProps)(HomeList);

export {HomeList};
