import {render} from '@testing-library/react';
import {Header} from './Header';

test('Should render Header component', () => {
  const {asFragment} = render(
    <Header>
      Test header
    </Header>
  );
  expect(asFragment()).toMatchSnapshot();
});
