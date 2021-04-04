import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAll} from '../../store/user/userActions';
import {addWindow} from '../../store/window/windowActions';
import * as uuid from 'uuid';
import {AboutContent} from '../../components/Public/Content/About';

let About = ({user, getAll, openWindow}) => {
  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    openWindow(user);
  }, [user?.id]);

  return (
    <></>
  );
};

About.propTypes = {
  user: PropTypes.object,
  getAll: PropTypes.func,
  openWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user.users[0],
});

const mapDispatchToProps = (dispatch) => ({
  getAll: () => {
    dispatch(getAll());
  },
  openWindow: (user) => {
    dispatch(addWindow({
      id: uuid.v4(),
      content: user,
      title: 'About Me',
      component: AboutContent,
    }));
  },
});

About = connect(mapStateToProps, mapDispatchToProps)(About);

export {About};
