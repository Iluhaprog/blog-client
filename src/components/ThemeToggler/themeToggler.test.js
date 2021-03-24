import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react';
import {ThemeToggler} from './ThemeToggler';
import {themes} from '../../store/settings/settingsReduser';

test('Should call functions', async () => {
  const setDarkTheme = jest.fn();
  const setLightTheme = jest.fn();
  const {container} = render(
      <ThemeToggler
        theme={themes.LIGHT}
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />,
  );
  fireEvent.click(container.querySelector('.btn'));
  fireEvent.click(container.querySelector('.btn'));
  await waitFor(() => {
    expect(setDarkTheme).toBeCalledTimes(1);
    expect(setLightTheme).toBeCalledTimes(1);
  });
});
