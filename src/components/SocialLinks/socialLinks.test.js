import React from  'react';
import { render } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('test view of social links components', () => {
    const { asFragment } = render(<SocialLinks />);
    expect(asFragment()).toMatchSnapshot();
});