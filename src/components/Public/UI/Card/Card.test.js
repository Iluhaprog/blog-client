import {render} from '@testing-library/react';
import React from 'react';
import {Card} from './Card';

test('Should render Background component', () => {
  const {asFragment} = render(
    <Card maxWidth={100} maxHeight={100}>
      Hello
    </Card>
  );
  expect(asFragment()).toMatchSnapshot();
});
