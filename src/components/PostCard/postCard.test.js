import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import PostCard from './PostCard';

describe('Test post card view', () => {
    test('Should view post card (canEdit is false)', () => {
        const { asFragment } = render(
            <PostCard 
                title='Test title'
                description='test description'
                date='25.04.2020'
                tags={[
                    {id: 1, title: 'React'}, 
                    {id: 2, title: 'JS'}, 
                    {id: 3, title: 'NODEJS'}
                ]}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test('Should view post card (canEdit is true)', () => {
        const { asFragment } = render(
            <PostCard 
                title='Test title'
                description='test description'
                date='25.04.2020'
                canEdit={true}
                tags={[
                    {id: 1, title: 'React'}, 
                    {id: 2, title: 'JS'}, 
                    {id: 3, title: 'NODEJS'}
                ]}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test post card events', () => {
    test('Should handle onclick', async () => {
        const handleClick = jest.fn();
        const { container } = render(
            <PostCard onClick={handleClick} />
        );
        fireEvent.click(container.querySelector('.primary-button'));
        await waitFor(() => {
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });
    test('Should handle delete', async () => {
        const handleDelete = jest.fn();
        const { container } = render(
            <PostCard canEdit={true} onDelete={handleDelete} />
        );
        fireEvent.click(container.querySelector('.danger-button'));
        await waitFor(() => {
            expect(handleDelete).toHaveBeenCalledTimes(1);
        });
    });
});