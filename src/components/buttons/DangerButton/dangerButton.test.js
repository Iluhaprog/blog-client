import React from 'react';
import { render } from '@testing-library/react';
import { DangerButton } from '.';

test('Test view of danger button', () => {
    const { asFragment } = render(<DangerButton text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});