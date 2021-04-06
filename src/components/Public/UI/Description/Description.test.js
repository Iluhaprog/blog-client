import {Description} from './Description';
import {render} from '@testing-library/react';

test('Should render Description component', () => {
  const {asFragment} = render(
    <Description>
      Test text
    </Description>
  );
  expect(asFragment()).toMatchSnapshot();
});
