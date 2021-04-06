import {render} from '@testing-library/react';
import {SearchInput} from './SearchInput';
import React from 'react';

test('Should render SearchInput component', () => {
  const {asFragment} = render(
    <SearchInput
      maxWidth={500}
      value={''}
      placeholder={'Search'}
      onChange={() => alert('c')}
      mod={'big'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
