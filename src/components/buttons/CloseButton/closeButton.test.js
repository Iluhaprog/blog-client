import React from 'react';
import { render } from '@testing-library/react';
import { CloseButton } from '.';

test('Test view of danger button', () => {
    const { asFragment } = render(<CloseButton text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});