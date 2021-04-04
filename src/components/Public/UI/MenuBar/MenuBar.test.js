import {Apple} from '../Icons/Apple';
import {render} from '@testing-library/react';
import {MenuBar} from './MenuBar';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

test('Should render MenuBar', () => {
  const {asFragment} = render(
    <BrowserRouter>
      <MenuBar
        logo={Apple}
      >
        <a href={'#'}>Item1</a>
        <a href={'#'}>Item1</a>
        <a href={'#'}>Item1</a>
      </MenuBar>
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
