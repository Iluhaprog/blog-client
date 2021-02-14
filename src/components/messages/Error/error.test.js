import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

test('Test view of error message', () => {
    const { asFragment } = render(<Error message='test' />);
    expect(asFragment()).toMatchSnapshot();
})