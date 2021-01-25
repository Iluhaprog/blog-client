import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import tagReducer from '../TagReducer';
import { setTags, addTag } from '../TagReducer';
import { addTagFetch, getAllFetch } from '../TagReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test sync action creators', () => {
    test('Should create ADD_TAG action', () => {
        const tag = { id: 1, title: 'TEST TITLE' };
        const expectedActions = [{ type: 'ADD_TAG', tag }];
        const store = mockStore({});
        store.dispatch(addTag(tag));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_TAGS action', () => {
        const tag = { id: 1, title: 'TEST TITLE' };
        const expectedActions = [{ type: 'SET_TAGS', tags: [tag] }];
        const store = mockStore({});
        store.dispatch(setTags([tag]));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create ADD_TAG action', () => {
        const tag = { title: 'TEST TITLE' };
        mock.onPost('/tag/create', { tag }).reply(200, tag);
        const expectedActions = [{ type: 'ADD_TAG', tag }];
        const store = mockStore({});
        return store.dispatch(addTagFetch(tag)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_TAGS action', () => {
        const tag = { title: 'TEST TITLE' };
        mock.onGet('/tag/getAll').reply(200, [tag]);
        const expectedActions = [{ type: 'SET_TAGS', tags: [tag] }];
        const store = mockStore({});
        return store.dispatch(getAllFetch()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('Test tag reducer', () => {
    test('Should return init state', () => {
        expect(tagReducer(undefined, {})).toEqual({ tags: [] });
    });

    test('Should handle ADD_TAG action', () => {
        const tag = { id: 1, title: 'TEST TITLE' };
        const beginState = { tags: [] };
        expect(tagReducer(beginState, addTag(tag))).toEqual({
            tags: [tag],
        });
    });

    test('Should handle SET_TAGS action', () => {
        const tags = [
            { id: 1, title: 'TEST TITLE 1' },
            { id: 2, title: 'TEST TITLE 2' }
        ];
        const beginState = { tags: [] };
        expect(tagReducer(beginState, setTags(tags))).toEqual({
            tags,
        });
    });
});