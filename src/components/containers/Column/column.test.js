import React from 'react';
import { render } from '@testing-library/react';
import Column from './Column';

test('Test column row component (default view)', () => {
    const { asFragment } = render(<Column></Column>);
    expect(asFragment()).toMatchSnapshot();
});

test('Test of column component  (view witn jystify-content and align-items)', () => {
    const { asFragment } = render(
        <Column
            justifyContent='c'
            alignItems='c'   
            wrap='w'
        >
        </Column>
    );
    expect(asFragment()).toMatchSnapshot();
});