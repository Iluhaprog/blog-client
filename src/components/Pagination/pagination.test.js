import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './Pagination';

test('test view of pagination first', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Pagination
                totalItems={100}
                itemsPerPage={10}
                currentPage={1}
                changePage={() => {}}
                visiblePageLinks={5}
                page='test'
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('test view of pagination center', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Pagination
                totalItems={100}
                itemsPerPage={10}
                currentPage={5}
                changePage={() => {}}
                visiblePageLinks={3}
                page='test'
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('test view of pagination last page', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Pagination
                totalItems={100}
                itemsPerPage={10}
                currentPage={10}
                changePage={() => {}}
                visiblePageLinks={3}
                page='test'
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('test change page of pagination', async () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
        <BrowserRouter>
            <Pagination
                totalItems={100}
                itemsPerPage={10}
                currentPage={1}
                changePage={handleChangePage}
                visiblePageLinks={5}
                page='test'
            />
        </BrowserRouter>
    );
    fireEvent.click(getByText('1'));
    await waitFor(() => {
        expect(handleChangePage).toHaveBeenCalledTimes(1);
    })
});