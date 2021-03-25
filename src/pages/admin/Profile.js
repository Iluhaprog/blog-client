import React from 'react';
import {UserUpdateForm} from '../../components/User/UpdateForm/UpdateForm';
import {
  UserUpdatePasswordForm,
} from '../../components/User/UpdatePasswordForm/UpdatePasswordForm';

function Profile() {
  return (
    <section>
      <UserUpdateForm />
      <hr/>
      <UserUpdatePasswordForm />
    </section>
  );
}

Profile.propTypes = {};

export {Profile};
