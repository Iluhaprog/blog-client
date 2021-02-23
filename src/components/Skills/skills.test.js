import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('Should render Skills component', () => {
    const { asFragment } = render(<Skills skills={['test']} />);
    expect(asFragment()).toMatchSnapshot();
});