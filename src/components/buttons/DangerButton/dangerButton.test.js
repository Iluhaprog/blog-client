import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { DangerButton } from '.';

test('Test view of danger button', () => {
    const { asFragment } = render(<DangerButton text='test'/>);
    expect(asFragment()).toMatchSnapshot();
});

test('Test onclick event of danger button', async () => {
    const handleClick = jest.fn();
    const { container } = render(<DangerButton text='test' onClick={handleClick}/>);
    fireEvent.click(container.querySelector('button'));
    await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});