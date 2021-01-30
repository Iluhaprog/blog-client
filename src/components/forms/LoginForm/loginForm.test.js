import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const authorizedState = {
    authorized: true,
    status: 0,
    errorData: {},
};

const unauthorizedState = {
    authorized: false,
    status: 403,
    errorData: {
        msg: 'Forbidden',
    },
};

describe('Test view part of login form', () => {
    test('Test login form view without failure login', () => {
        const { status, errorData } = authorizedState;
        const store = mockStore(authorizedState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginForm err={{ status, errorData }} onSubmit={e => e} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Test login form view with failure login', () => {
        const { status, errorData } = unauthorizedState;
        const store = mockStore(unauthorizedState);
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginForm err={{ status, errorData }} onSubmit={e => e} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Test submit event for login form', async () => {
    const { status, errorData } = unauthorizedState;
    const handleSubmit = jest.fn();
    const store = mockStore(unauthorizedState);
    const { container } = render(
        <Provider store={store}>
            <BrowserRouter>
                <LoginForm err={{ status, errorData }} onSubmit={handleSubmit} />
            </BrowserRouter>
        </Provider>
    );
    fireEvent.submit(container.getElementsByTagName('form')[0]);
    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});