import {ThemeToggler as TT} from './ThemeToggler';
import {
  setDarkTheme,
  setLightTheme,
} from '../../store/settings/settingsActions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  setDarkTheme: () => dispatch(setDarkTheme()),
  setLightTheme: () => dispatch(setLightTheme()),
});

const ThemeToggler = connect(mapStateToProps, mapDispatchToProps)(TT);

export {ThemeToggler};
