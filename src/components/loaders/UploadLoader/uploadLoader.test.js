import React from 'react';
import { render } from '@testing-library/react';
import UploadLoader from './UploadLoader';

test('Should return loader view (visible false)', () => {
    const { asFragment } = render(<UploadLoader visible={false} />)
    expect(asFragment()).toMatchSnapshot();
});

test('Should return loader view (visible true)', () => {
    const { asFragment } = render(<UploadLoader visible={true} />)
    expect(asFragment()).toMatchSnapshot();  
});