import {render} from '@testing-library/react';
import {Title} from './Title';

test('Should render Title component', () => {
  const {asFragment} = render(
    <Title>
      Test text
    </Title>
  );
  expect(asFragment()).toMatchSnapshot();
});
