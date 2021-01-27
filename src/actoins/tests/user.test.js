import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import { loginFetch, logoutFetch, createFetch, updateFetch } from '../user';
import { login, setUser, clearUser, loginError } from '../user';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initUserState = {
    avatarImage: '',
    firstName: '',
    lastName: '',
    username: '',
    bio: '',
    email: '',
    password: '',
    skills: '',
    confirmed: false,
    authorized: false,
}

describe('Test sync action creators', () => {

    test('Should create login error action ', () => {
        const expectedActions = [
            { type: 'LOGIN_ERROR', status: 403, errorData: {data: ''} },
        ];
        const store = mockStore({ user: {}});
    
        store.dispatch(loginError(403, {data: ''}));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create login action ', () => {
        const expectedActions = [
            { type: 'LOGIN', authorized: true },
        ];
        const store = mockStore({ user: {}});
    
        store.dispatch(login(true));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create set user action ', () => {
        const user = { data: 'user_data' };
        const expectedActions = [
            { type: 'SET_USER', user },
        ];
        const store = mockStore({ user: {}});
    
        store.dispatch(setUser(user));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create clear action ', () => {
        const expectedActions = [
            { type: 'CLEAR' },
        ];
        const store = mockStore({ user: {}});
    
        store.dispatch(clearUser());
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create login, set user action ', () => {
        const user = { data: 'user_data' };
        mock.onPost('/user/login', {}, expect.objectContaining({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })).reply(200, user);

        const expectedActions = [
            { type: 'SET_USER', user },
            { type: 'LOGIN', authorized: true },
        ];
        const store = mockStore({ user: {}});
        
        return store.dispatch(loginFetch('Ilya', '111')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_USER action (createFetch)', () => {
        const user = {
            ...initUserState,
            username: 'ilkass',
            password: '123456',
        };

        mock.onPost('/user/create', { user }).reply(200, user);

        const expectedActions = [{ type: 'SET_USER', user }];
        const store = mockStore({ user: {} });

        return store.dispatch(createFetch(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_USER action (createFetch)', () => {
        const user = {
            ...initUserState,
            username: 'ilkass1',
            password: '123456',
        };

        mock.onPut('/user/update', { user }).reply(200, user);

        const expectedActions = [{ type: 'SET_USER', user }];
        const store = mockStore({ user: {} });

        return store.dispatch(updateFetch(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create CLEAR action', () => {
        mock.onPost('/user/logout').reply(204);
        const expectedActions = [{ type: 'CLEAR' }];
        const store = mockStore({ user: {}});
        return store.dispatch(logoutFetch).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});