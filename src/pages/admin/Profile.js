import React, {useEffect} from 'react';
import {
  UserUpdateForm,
} from '../../components/Admin/User/UpdateForm/UpdateForm';
import {
  UserUpdatePasswordForm,
} from '../../components/Admin/User/UpdatePasswordForm/UpdatePasswordForm';
import {getCurrent} from '../../store/user/userActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SocialFormList} from '../../components/Admin/Social/FormList';

let Profile = ({getUserData}) => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section>
      <UserUpdateForm />
      <hr/>
      <UserUpdatePasswordForm />
      <hr/>
      <SocialFormList />
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
