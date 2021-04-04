import React from 'react';
import {themes} from '../../../../store/settings/settingsReducer';
import {BrightnessHigh, Moon} from 'react-bootstrap-icons';
import {DefaultToggle} from '../Default';
import * as PropTypes from 'prop-types';

function ThemeToggle({theme, setDarkTheme, setLightTheme}) {
  return (
    <DefaultToggle
      theme={theme}
      condition={theme === themes.LIGHT}
      onTrue={() => setLightTheme()}
      onFalse={() => setDarkTheme()}
      components={[BrightnessHigh, Moon]}
    />
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string,
  setDarkTheme: PropTypes.func,
  setLightTheme: PropTypes.func,
};

export {ThemeToggle};
