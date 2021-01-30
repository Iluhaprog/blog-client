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
