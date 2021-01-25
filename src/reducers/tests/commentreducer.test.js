import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import api from '../../api/api';

import commentReducer from '../CommentReducer';
import { addComment, setComments, deleteComment } from '../CommentReducer';
import { createCommentFetch, getCommentsByPostIdFetch, deleteCommentFetch } from '../CommentReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test for sync action creators', () => {
    test('Should create ADD_COMMENT action', () => {
        const comment = { text: 'TEST COMMENT' };
        const expectedActions = [{ type: 'ADD_COMMENT', comment }];
        const store = mockStore({});
        store.dispatch(addComment(comment));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create SET_COMMENTS action', () => {
        const comments = [{ text: 'TEST COMMENT' }];
        const expectedActions = [{ type: 'SET_COMMENTS', comments }];
        const store = mockStore({});
        store.dispatch(setComments(comments));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Should create DELETE_COMMENT action', () => {
        const expectedActions = [{ type: 'DELETE_COMMENT', id: 1 }];
        const store = mockStore({});
        store.dispatch(deleteComment(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('Test for async action creators', () => {
    const mock = new MockAdapter(api);

    test('Should create ADD_COMMENT action', () => {
        const comment = { text: 'TEST COMMENT' };
        mock.onPost('/comment/create', { comment }).reply(200, comment);
        const expectedActions = [{ type: 'ADD_COMMENT', comment }];
        const store = mockStore({});
        return store.dispatch(createCommentFetch(comment)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create SET_COMMENTS action', () => {
        const comments = [{ text: 'TEST COMMENT' }];
        mock.onGet('/comment/getByPostId/0/1', { 
            params: {
                postId: 1,
            }
        }).reply(200, comments);
        const expectedActions = [{ type: 'SET_COMMENTS', comments }];
        const store = mockStore({});
        return store.dispatch(getCommentsByPostIdFetch(1, 0, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('Should create DELETE_COMMENT action', () => {
        mock.onDelete('/comment/deleteById', { 
            params: {
                id: 1,
            }
        }).reply(204);
        const expectedActions = [{ type: 'DELETE_COMMENT', id: 1 }];
        const store = mockStore({});
        return store.dispatch(deleteCommentFetch(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('Test for comment reducer', () => {
    test('Should return init state', () => {
        expect(commentReducer(undefined, {})).toEqual({ comments: [] });
    });

    test('Should handle ADD_COMMENT action', () => {
        const beginState = {
            comments: [],
        };
        const comment = { text: 'TEST TEXT' };
        expect(commentReducer(beginState, addComment(comment))).toEqual({
            comments: [comment],
        });
    });

    test('Should handle SET_COMMENTS action', () => {
        const beginState = {
            comments: [],
        };
        const comments = [{ text: 'TEST TEXT' }];
        expect(commentReducer(beginState, setComments(comments))).toEqual({
            comments,
        });
    });

    test('Should handle DELETE_COMMENT action', () => {
        const comments = [{ id: 1, text: 'TEST TEXT' }];
        const beginState = { comments };
        expect(commentReducer(beginState, deleteComment(1))).toEqual({
            comments: [],
        });
    });
});