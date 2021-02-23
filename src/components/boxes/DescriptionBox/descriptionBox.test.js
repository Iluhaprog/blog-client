import React from 'react'; 
import { render } from '@testing-library/react';
import DescriptionBox from './DescriptionBox';

test('Should render a description box', () => {
    const { asFragment } = render(
        <DescriptionBox
            title='test title'
            description='test description'
        >
            <div><p>test children</p></div>
        </DescriptionBox>
    );
    expect(asFragment()).toMatchSnapshot();
});