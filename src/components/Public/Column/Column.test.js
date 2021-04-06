import {render} from '@testing-library/react';
import {Column} from './index';

test('Should render Header component', () => {
  const {asFragment} = render(
    <Column justifyContent={'center'} alignItems={'flex-end'}>
      Test column
    </Column>
  );
  expect(asFragment()).toMatchSnapshot();
});
