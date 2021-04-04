import {render} from '@testing-library/react';
import {Titlebar} from './Titlebar';

test('Should render Titlebar', () => {
  const {asFragment} = render(
    <Titlebar isActive={true} title={'title'} onClose={() => {}}/>
  );
  expect(asFragment()).toMatchSnapshot();
});
