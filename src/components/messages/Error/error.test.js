import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Error from './Error';

test('Test view of error message', () => {
    const { asFragment } = render(<Error message='test' />);
    expect(asFragment()).toMatchSnapshot();
})

test('Test event on close of error message', async () => {
    const handleClose = jest.fn();
    const { container } = render(<Error message='test' onClose={handleClose} />);
    fireEvent.click(container.querySelector('.button'));
    await waitFor(() => {
        expect(handleClose).toHaveBeenCalledTimes(1);
    })
})