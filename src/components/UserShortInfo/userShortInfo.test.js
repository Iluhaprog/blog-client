import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { UserShortInfo } from '.';
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore();

test('Test user short info view', () => {
    const store = mockStore({
        user: {
            firstName: 'Test firstname',
            lastName: 'Test lastname'
        }
    });
    
    const { asFragment } = render(
        <Provider store={store}>
            <UserShortInfo />
        </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
});


test('Test user short info view (row)', () => {
    const store = mockStore({
        user: {
            firstName: 'Test firstname',
            lastName: 'Test lastname'
        }
    });
    
    const { asFragment } = render(
        <Provider store={store}>
            <UserShortInfo row={true} />
        </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
});

test('Test user short info view (width, height)', () => {
    const store = mockStore({
        user: {
            firstName: 'Test firstname',
            lastName: 'Test lastname'
        }
    });
    
    const { asFragment } = render(
        <Provider store={store}>
            <UserShortInfo row={true} width={30} height={30} />
        </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
});