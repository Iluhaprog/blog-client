import React from 'react';
import { render } from '@testing-library/react';
import PageLoader from './PageLoader';

test('Should render PageLoader component', () => {
    const { asFragment } = render(<PageLoader visiple={true}/>);
    expect(asFragment()).toMatchSnapshot();
});