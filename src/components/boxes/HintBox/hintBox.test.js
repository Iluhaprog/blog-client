import React from 'react';
import { render } from '@testing-library/react';
import HintBox from './HintBox';

test('Test view of hint box', () => {
    const { asFragment } = render(<HintBox>My hint</HintBox>);
    expect(asFragment()).toMatchSnapshot();
});