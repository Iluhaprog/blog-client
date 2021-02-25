import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('Should render loader component (visible false)', () => {
    const { asFragment } = render(<Loader>Loading...</Loader>);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render loader component (visible true)', () => {
    const { asFragment } = render(<Loader visible={true}>Loading...</Loader>);
    expect(asFragment()).toMatchSnapshot();
});