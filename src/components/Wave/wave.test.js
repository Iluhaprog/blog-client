import React from 'react';
import { render } from '@testing-library/react';
import { Wave } from '.';

test('Should return view of wave component', () => {
    const { asFragment } = render(<Wave img='' />);
    expect(asFragment()).toMatchSnapshot();
})