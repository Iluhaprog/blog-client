import React from 'react';
import { render } from '@testing-library/react';
import Row from './Row';

test('Test of row component (default view)', () => {
    const { asFragment } = render(<Row></Row>);
    expect(asFragment()).toMatchSnapshot();
});

test('Test of row component  (view witn jystify-content and align-items)', () => {
    const { asFragment } = render(
        <Row
            justifyContent='c'
            alignItems='c'   
        >
        </Row>
    );
    expect(asFragment()).toMatchSnapshot();
});