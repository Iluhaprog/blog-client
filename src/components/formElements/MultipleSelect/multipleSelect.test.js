import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import MultipleSelect from './MultipleSelect';

describe('Test view of multiple select', () => {
    test('Without values and options', () => {
        const { asFragment } = render(
            <MultipleSelect
                values={[]}
                options={[]}
                onChange={() => {}}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test('With values and options', () => {
        const { asFragment } = render(
            <MultipleSelect
                values={[{ id: 1, title: 11 }]}
                options={[{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }]}
                onChange={() => {}}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test events of multiple select', () => {
    test('Should handle change', async () => {
        const handleChange = jest.fn();
        const { container } = render(
            <MultipleSelect
                values={[]}
                options={[{ id: 1, title: 'test1' }, { id: 2, title: 'test2' }]}
                onChange={handleChange}
            />
        );
        fireEvent.click(container.querySelector('.option'));
        await waitFor(() => {
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(handleChange).toHaveBeenCalledWith({ id: 1, title: 'test1' });
        });      
    });
});