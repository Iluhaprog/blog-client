import React from 'react';
import { render } from '@testing-library/react';
import { Container } from '.';

test('should render container', () => {
    const { asFragment } = render(<Container></Container>);
    expect(asFragment()).toMatchSnapshot();
});