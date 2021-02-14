import React from 'react';
import { render } from '@testing-library/react';
import MessagesBox from './MessagesBox';

test('Test view of messages box', () => {
    const { asFragment } = render(<MessagesBox>child</MessagesBox>);
    expect(asFragment()).toMatchSnapshot();
});