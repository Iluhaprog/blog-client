import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import { selectPostById, clearSelectedPost, deletePostById, setTotal, setTotalFetch } from '../post';
import { addPosts, addPost, clearPosts, updatePost } from '../post';
import { addFiles, addFile, deleteFile } from '../post';
import { createFetch, updateFetch, deleteFetch, getAllFetch } from '../post'
import { createFileFetch, getFilesFetch, deleteFileFetch } from '../post'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initPostState = {
    selected: {
        title: '',
        description: '',
        text: '',
        preview: '',
        visible: false,
        date: '',
        directoryId: 0,
    },
    files: [],
    array: [],
    total: 0,
};

describe('Test for sync action creators', () => {
    test('Should create SET_TOTAL action', () => {
        const expectedActions = [{ type: 'SET_TOTAL', total: 1 }]
        const store = mockStore({ post: {}});
        store.dispatch(setTotal(1));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create SELECT action', () => {
        const expectedActions = [{ type: 'SELECT_POST', id: 1 }]
        const store = mockStore({ post: {}});
        store.dispatch(selectPostById(1));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create CLEAR_SELECTED_POST action', () => {
        const expectedActions = [{ type: 'CLEAR_SELECTED_POST' }]
        const store = mockStore({ post: {}});
        store.dispatch(clearSelectedPost(1));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create ADD_POSTS action', () => {
        const posts = [{...initPostState}];
        const expectedActions = [{ type: 'ADD_POSTS', posts }]
        const store = mockStore({ post: {}});
        store.dispatch(addPosts(posts));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create ADD_POST action', () => {
        const post = {...initPostState, title: 'New post'};
        const expectedActions = [{ type: 'ADD_POST', post }]
        const store = mockStore({ post: {}});
        store.dispatch(addPost(post));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create UPDATE_POST action', () => {
        const post = {...initPostState, title: 'Updated post'};
        const expectedActions = [{ type: 'UPDATE_POST', post }]
        const store = mockStore({ post: {}});
        store.dispatch(updatePost(post));
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create CLEAR_POSTS action', () => {
        const expectedActions = [{ type: 'CLEAR_POSTS' }]
        const store = mockStore({ post: {}});
        store.dispatch(clearPosts());
        expect(store.getActions()).toEqual(expectedActions)
    });

    test('Should create DELETE_POST_FROM_ARRAY action', () => {
        const expectedActions = [{ type: 'DELETE_POST_FROM_ARRAY', id: 1 }];
        const store = mockStore({ post: {}});
        store.dispatch(deletePostById(1));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create ADD_FILES action', () => {
        const files = [{ name: 'file' }]
        const expectedActions = [{ type: 'ADD_FILES', files}];
        const store = mockStore({ post: {}});
        store.dispatch(addFiles(files));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create ADD_FILE action', () => {
        const file = { name: 'file' };
        const expectedActions = [{ type: 'ADD_FILE', file}];
        const store = mockStore({ post: {}});
        store.dispatch(addFile(file));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create DELETE_FILE action', () => {
        const expectedActions = [{ type: 'DELETE_FILE', id: 1}];
        const store = mockStore({ post: {}});
        store.dispatch(deleteFile(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create SET_TOTAL action', () => {
        const total = { count: 1 };
        mock.onGet('/post/getCount').reply(200, total);
        const expectedActions = [{ type: 'SET_TOTAL', total: 1 }]
        const store = mockStore({ post: {}});
        return store.dispatch(setTotalFetch()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create ADD_POST action', () => {
        const post = {...initPostState, title: 'New post'};
        mock.onPost('/post/create', { post }).reply(200, post);
        const expectedActions = [{ type: 'ADD_POST', post }]
        const store = mockStore({ post: {}});
        
        return store.dispatch(createFetch(post)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create UPDATE_POST action', () => {
        const post = {...initPostState, title: 'New post'};
        mock.onPut('/post/update', { post }).reply(200, post);
        const expectedActions = [{ type: 'UPDATE_POST', post }]
        const store = mockStore({ post: {}});
        
        return store.dispatch(updateFetch(post)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create CLEAR_SELECTED_POST, DELETE_POST_FROM_ARRAY action', () => {
        mock.onDelete('/post/deleteById', {
            params: { id: 1 }
        }).reply(204);
        const expectedActions = [
            { type: 'DELETE_POST_FROM_ARRAY', id: 1},
        ];
        const store = mockStore({ post: {}});
        
        return store.dispatch(deleteFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create ADD_POSTS action', () => {
        const post = {...initPostState, title: 'New post'};
        mock.onGet('/post/getAll/0/1').reply(200, [post]);
        const expectedActions = [
            { type: 'ADD_POSTS', posts: [post] }
        ];
        const store = mockStore({ post: {}});
        
        return store.dispatch(getAllFetch(0, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create ADD_FILE action', () => {
        const fd = new FormData();
        const file = { name: 'file.ext' };
        mock.onPost('/file/create').reply(config => {
            const { headers, data, params } = config;
            expect(params.dirname).toBe('test');
            expect(headers['Content-Type']).toBe('multipart/form-data');
            expect(data).toEqual(fd);
            return new Promise((resolve, reject) => {
                resolve([200, file]);
            });
        });
        const expectedActions = [{ type: 'ADD_FILE', file}];
        const store = mockStore({ post: {}});
        return store.dispatch(createFileFetch('test', fd)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create ADD_FILES action', () => {
        const file = { name: 'file.ext' };
        mock.onGet('/file/getByDirectoryId', {
            params: {
                directoryId: 1,
            },
        }).reply(200, [file]);
        const expectedActions = [{ type: 'ADD_FILES', files: [file] }];
        const store = mockStore({ post: {}});
        return store.dispatch(getFilesFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create DELETE_FILE action', () => {
        mock.onDelete('/file/deleteById', {
            params: { id: 1 }
        }).reply(204);
        const expectedActions = [{ type: 'DELETE_FILE', id: 1 }];
        const store = mockStore({ post: {}});
        return store.dispatch(deleteFileFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
