import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from '.';

test('Test view of danger button', () => {
    const { asFragment } = render(<PrimaryButton text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});