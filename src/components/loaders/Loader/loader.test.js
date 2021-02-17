import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('Should return loader view (visible false)', () => {
    const { asFragment } = render(<Loader visible={false} />)
    expect(asFragment()).toMatchSnapshot();
});

test('Should return loader view (visible true)', () => {
    const { asFragment } = render(<Loader visible={true} />)
    expect(asFragment()).toMatchSnapshot();  
});