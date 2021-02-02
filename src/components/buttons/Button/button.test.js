import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Test view of button', () => {
    const { asFragment } = render(<Button text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});


test('Test view of button with children', () => {
    const { asFragment } = render(<Button>Child</Button>);
    expect(asFragment()).toMatchSnapshot();
});

test('Test onclick event of danger button', async () => {
    const handleClick = jest.fn();
    const { container } = render(<Button text='test' onClick={handleClick}/>);
    fireEvent.click(container.querySelector('button'));
    await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});