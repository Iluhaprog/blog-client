import React from 'react';
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainNav from './MainNav';

const mockStore = configureMockStore();

test('Should return view (isAuth=false)', () => {
    const store = mockStore();
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <MainNav />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('Should return view (isAuth=true)', () => {
    const store = mockStore({
        user: {
            firstName: 'Test firstname',
            lastName: 'Test lastname',
            avatarImage: '',
        },
    });
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <MainNav isAuth={true} />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot(); 
});