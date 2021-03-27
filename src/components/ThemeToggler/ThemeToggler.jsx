import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {BrightnessHigh, Moon} from 'react-bootstrap-icons';
import * as PropTypes from 'prop-types';
import {themes} from '../../store/settings/settingsReducer';

function ThemeToggler({theme, setDarkTheme, setLightTheme}) {
  const [isLight, setIsLight] = useState(theme === themes.LIGHT);
  const setLight = () => {
    setIsLight(true);
    setLightTheme();
  };
  const setDark = () => {
    setIsLight(false);
    setDarkTheme();
  };
  return (
    <Button
      variant={theme}
      onClick={isLight ? setDark : setLight}
    >
      {
        isLight ? <BrightnessHigh/> : <Moon />
      }
    </Button>
  );
}

ThemeToggler.propTypes = {
  theme: PropTypes.string,
  setDarkTheme: PropTypes.func,
  setLightTheme: PropTypes.func,
};

export {ThemeToggler};
