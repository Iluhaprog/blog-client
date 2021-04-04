import {render} from '@testing-library/react';
import {Window} from './Window';

test('Should render window', () => {
  const {asFragment} = render(
    <Window title={'TEST'}>
      <p>TEST BODY</p>
    </Window>
  );
  expect(asFragment()).toMatchSnapshot();
});
