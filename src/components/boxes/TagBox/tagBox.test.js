import React from 'react';
import { render } from '@testing-library/react';
import TagBox from './TagBox';

test('Test view of tag box', () => {
    const { asFragment } = render(
        <TagBox title='Test title' />
    );
    expect(asFragment()).toMatchSnapshot();    
});