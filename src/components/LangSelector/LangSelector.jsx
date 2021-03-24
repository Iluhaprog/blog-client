import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {locales} from '../../locales/locales';
import PropTypes from 'prop-types';
import {Globe2} from 'react-bootstrap-icons';

function LangSelector({lang, theme, setLang}) {
  return (
    <Dropdown
      variant={theme}
    >
      <Dropdown.Toggle variant={theme}>
        <Globe2/> {lang.title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.keys(locales).map((locale, index) => (
            <Dropdown.Item
              key={locale + index}
              onClick={(e) => {
                setLang(locales[locale]);
              } }
            >
              {locale}
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

LangSelector.propTypes = {
  lang: PropTypes.object,
  theme: PropTypes.string,
  setLang: PropTypes.func,
};

export {LangSelector};
