import React from 'react';
import {render} from '@testing-library/react';
import {Background} from './Background';

test('Should render Background component', () => {
  const {asFragment} = render(
    <Background
      maxHeight={200}
      src={'https://static.toiimg.com/photo/72975551.cms'}
      alt={'img'}
    >
      Hello
    </Background>
  );
  expect(asFragment()).toMatchSnapshot();
});
