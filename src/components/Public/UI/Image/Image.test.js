import {render} from '@testing-library/react';
import {Image} from './Image';
import React from 'react';

test('Should render Image', () => {
  const {asFragment} = render(
    <Image
      width={100}
      height={100}
      src={'https://wallpapercave.com/wp/wp2670841.jpg'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
