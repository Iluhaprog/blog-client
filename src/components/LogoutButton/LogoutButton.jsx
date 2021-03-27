import React from 'react';
import {Button} from 'react-bootstrap';
import {DoorOpen} from 'react-bootstrap-icons';
import {logout} from '../../store/auth/authActions';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {themes} from '../../store/settings/settingsReducer';

let LogoutButton = ({theme, logout}) => {
  return (
    <Button
      variant={theme === themes.DARK ? 'dark' : 'light'}
      onClick={() => logout()}
    >
      <DoorOpen />
    </Button>
  );
};

LogoutButton.propTypes = {
  theme: PropTypes.string,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

LogoutButton = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export {LogoutButton};
