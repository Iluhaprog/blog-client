import {render} from '@testing-library/react';
import React from 'react';
import {HomeSection} from './HomeSection';

test('Should render Background component', () => {
  const {asFragment} = render(
    <HomeSection
      maxHeight={200}
      src={'https://static.toiimg.com/photo/72975551.cms'}
      card={{
        maxWidth: 200,
        maxHeight: 100,
      }}
    >
      Hello world
    </HomeSection>
  );
  expect(asFragment()).toMatchSnapshot();
});
