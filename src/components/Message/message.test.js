import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('Test view of message box without children', () => {
    const { asFragment } = render(<Message />);
    expect(asFragment()).toMatchSnapshot();
});


test('Test view of message box with children', () => {
    const er = [{
        id: 1,
        showed: false,
        error: { message: 'test' },
    }];
    const { asFragment } = render(<Message errors={er}/>);
    expect(asFragment()).toMatchSnapshot();
})
