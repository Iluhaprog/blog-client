import React, {useEffect} from 'react';
import {UserUpdateForm} from '../../components/User/UpdateForm/UpdateForm';
import {
  UserUpdatePasswordForm,
} from '../../components/User/UpdatePasswordForm/UpdatePasswordForm';
import {getCurrent} from '../../store/user/userActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

let Profile = ({getUserData}) => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section>
      <UserUpdateForm />
      <hr/>
      <UserUpdatePasswordForm />
    </section>
  );
};

Profile.propTypes = {
  getUserData: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getCurrent()),
});

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export {Profile};
