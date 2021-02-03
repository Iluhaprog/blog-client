import React from 'react';
import { render } from '@testing-library/react';
import { SuccessButton } from '.';

test('Test view of success button', () => {
    const { asFragment } = render(<SuccessButton text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});