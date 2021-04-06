import {Time} from './Time';
import {render} from '@testing-library/react';

test('Should render Time component', () => {
  const {asFragment} = render(
    <Time>
      TEST_TIME
    </Time>
  );
  expect(asFragment()).toMatchSnapshot();
});
