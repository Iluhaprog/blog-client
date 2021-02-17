import React from 'react';
import { render } from '@testing-library/react';
import { ImageBox } from '.';

test('Shoud render box without image', () => {
    const { asFragment } = render(<ImageBox>Test</ImageBox>);
    expect(asFragment()).toMatchSnapshot();
});


test('Shoud render box with image', () => {
    const { asFragment } = render(<ImageBox img='./img.png'>Test</ImageBox>);
    expect(asFragment()).toMatchSnapshot();
});