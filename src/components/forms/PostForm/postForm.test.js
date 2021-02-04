import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk'
import { render, fireEvent, waitFor } from '@testing-library/react';
import PostForm from './PostForm';
import api from '../../../api/api';

const initPostState = {
    post: {
        selected: {
            title: '',
            description: '',
            text: '',
            preview: '',
            visible: false,
            date: '',
            directoryId: 0,
            Tags: [],
        },
        files: [],
        array: [],
        total: 0,
    },
    tags: {
        tags: [],
    },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Test view of post form', () => {
    const store = mockStore(initPostState);
    const { asFragment } = render(
        <Provider store={store}>
            <PostForm onSubmit={() => {}} />)
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});