import {render} from '@testing-library/react';
import {Input} from './index';

test('Should render Input component', () => {
  const {asFragment} = render(
    <Input
      value={'Ok'}
      placeholder={'Test'}
      onChange={() => {}}
    />);
  expect(asFragment()).toMatchSnapshot();
});
