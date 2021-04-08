import {render} from '@testing-library/react';
import {Mail} from './Mail';

test('Should render Mail component', () => {
  const {asFragment} = render(
    <Mail href={'mailto:test@test.com'}>TEST MAIL</Mail>
  );
  expect(asFragment()).toMatchSnapshot();
});
