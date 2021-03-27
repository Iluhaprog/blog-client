import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react';
import {LangSelector} from './LangSelector';
import {themes} from '../../store/settings/settingsReducer';
import {locales} from '../../locales/locales';

test('Should render LangSelector', async () => {
  const setLang = jest.fn();
  const el = (
    <LangSelector
      lang={locales.ru}
      theme={themes.LIGHT}
      setLang={setLang}
    />
  );
  const dom = await render(el);
  fireEvent.click(dom.getByText('ru'));
  fireEvent.click(dom.getByText('en'));
  await waitFor(() => {
    expect(setLang).toHaveBeenCalled();
  });
});
