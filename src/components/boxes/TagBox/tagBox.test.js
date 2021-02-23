import React from 'react';
import { render } from '@testing-library/react';
import TagBox from './TagBox';

test('Test view of tag box', () => {
    const { asFragment } = render(
        <TagBox title='Test title' />
    );
    expect(asFragment()).toMatchSnapshot();    
});

test('Test view of tag box with mode', () => {
    const { asFragment } = render(
        <TagBox title='Test title' mode='test' />
    );
    expect(asFragment()).toMatchSnapshot();    
});