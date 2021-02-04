import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import Toggler from './Toggler';

describe('Test view of toggler', () => {
    test('Should show a toggler with "false" value', () => {
        const { asFragment } = render(<Toggler value={false} onChange={() => {}}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should show a toggler with "true" value', () => {
        const { asFragment } = render(<Toggler value={true} onChange={() => {}}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test events of toggler', () => {
    test('Should handle onchange event', async () => {
        const handleChange = jest.fn();
        const { container } = render(<Toggler value={false} onChange={handleChange}/>);
        fireEvent.click(container.querySelector('.toggler'));
        await waitFor(() => {
            expect(handleChange).toHaveBeenCalledTimes(1);
        });
    });
});