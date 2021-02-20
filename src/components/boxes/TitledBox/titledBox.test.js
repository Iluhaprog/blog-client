import React from 'react';
import { render } from '@testing-library/react';
import { TitledBox } from '.';

test('Should render titled box', () => {
    const { asFragment } = render(
        <TitledBox title='Test'>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
        </TitledBox>
    );
    expect(asFragment()).toMatchSnapshot();
}); 