import React from 'react';
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './AdminNav';

const mockStore = configureMockStore();

test('Test nav render', () => {
    const store = mockStore({
        user: {
            firstName: 'Test firstname',
            lastName: 'Test lastname'
        }
    });
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});