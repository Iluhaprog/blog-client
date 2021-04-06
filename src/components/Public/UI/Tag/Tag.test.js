import {render} from '@testing-library/react';
import {Tag} from './Tag';

test('Should render Tag component', () => {
  const {asFragment} = render(
    <Tag title={'TEST_TAG'} mod={'small'}/>
  );
  expect(asFragment()).toMatchSnapshot();
});
