import {render} from '@testing-library/react';
import {Row} from './Row';

test('Should render Header component', () => {
  const {asFragment} = render(
    <Row justifyContent={'center'} alignItems={'start'}>
      Test header
    </Row>
  );
  expect(asFragment()).toMatchSnapshot();
});
