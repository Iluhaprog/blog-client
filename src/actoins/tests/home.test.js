import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import {
    setHome,
    getHomeFetch,
    update,
    updatePreview,
} from '../home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const home = {
    id: 1,
    title: 'Test',
    preview: '',
};

describe('Test sync action creators', () => {
    test('Should create SET_HOME action', () => {
        const store = mockStore();
        const home = { id: 1, title: 'title', preview: ''};
        const expectedActions = [{ type: 'SET_HOME', home }];
        store.dispatch(setHome(home));
        expect(store.getActions()).toEqual(expectedActions);
    });
});


describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create SET_HOME action', () => {
        mock.onGet('/home/get').reply(200, {...home});
        const expectedActions = [{ type: 'SET_HOME', home }];
        const store = mockStore();
        return store.dispatch(getHomeFetch()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    
    test('Should create SET_HOME action', () => {
        const updatedHome = {...home, title: 'updated'}
        mock.onPut('/home/update', { home: updatedHome }).reply(200, updatedHome);
        const expectedActions = [{ type: 'SET_HOME', home: updatedHome }];
        const store = mockStore({});
        return store.dispatch(update(updatedHome)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_HOME action', () => {
        const formData = new FormData();
        const updatedHome = { ...home, preview: 'new preview'};
        mock.onPut('/home/updatePreview').reply(config => {
            const { headers, data, params } = config;
            expect(params.dirname).toBe(process.env.REACT_APP_HOME_DIR);
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(formData);
            return new Promise((resolve, reject) => {
                resolve([200, updatedHome]);
            });
        });
        const expectedActions = [{ type: 'SET_HOME', home: updatedHome }];
        const store = mockStore({});
        return store.dispatch(updatePreview(formData)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});