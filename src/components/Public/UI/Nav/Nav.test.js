import {render} from '@testing-library/react';
import {Nav} from './Nav';
import {BrowserRouter} from 'react-router-dom';

test('Should render Nav component', () => {
  const {asFragment} = render(
    <BrowserRouter>
      <Nav
        paths={[
          {to: '/posts', title: 'Posts'},
          {to: '/about', title: 'About'},
          {to: '/pojects', title: 'Projects'},
        ]}
      />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
