import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterNav from './FooterNav';

test('Should render footer nav component', () => {
    const  { asFragment } = render(<BrowserRouter><FooterNav /></BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});