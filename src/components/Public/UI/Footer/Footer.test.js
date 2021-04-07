import {render} from '@testing-library/react';
import {Footer} from './Footer';

test('Should render Footer component', () => {
  const {asFragment} = render(
    <Footer>
      Test text
    </Footer>
  );
  expect(asFragment()).toMatchSnapshot();
});
