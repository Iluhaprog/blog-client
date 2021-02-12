import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import ProfileForm from './ProfileForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const defaultUserState = {
    user : { 
        avatarImage: 'img.jpg',
        firstName: 'Test fn',
        lastName: 'Test ln',
        username: 'test un',
        bio: 'Test bio',
        email: 'test@test.test',
        skills: 'test skills',
        isFetch: false,
    },
};

describe('Test for profile form view', () => {
    test('Should have values from inital state', async () => {
        const store = mockStore(defaultUserState);
        const { asFragment } = render(
            <Provider store={store}>
                <ProfileForm onSubmit={e => e} />
            </Provider>
        );

        await waitFor(() => {
            expect(!!store.getActions().length).toBe(true);
            expect(asFragment()).toMatchSnapshot();
        });
    });
});

describe('Test for profile form submit', () => {
    test('Should make submit', async () => {
        const store = mockStore(defaultUserState);
        const submit = jest.fn();
        const { asFragment, container } = render(
            <Provider store={store}>
                <ProfileForm onSubmit={submit} />
            </Provider>
        );
        
        fireEvent.submit(container.querySelector('form'));

        await waitFor(() => {
            expect(submit).toHaveBeenCalledTimes(1);
        });
    });
});