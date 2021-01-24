import PostApi from '../api/PostApi';
import FileApi from '../api/FileApi';
import * as array from '../util/array';

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
};

const SELECT_POST = 'SELECT_POST';
const CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST';
const ADD_POSTS = 'ADD_POSTS';
const ADD_POST = 'ADD_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST_FROM_ARRAY = 'DELETE_POST_FROM_ARRAY';
const ADD_FILES = 'ADD_FILES';
const ADD_FILE = 'ADD_FILE';
const DELETE_FILE = 'DELETE_FILE';

const postReduser = (state = initPostState, action) => {
    switch(action.type) {
        case SELECT_POST:
            const post = array.search(action.id, state.array);
            return {
                ...state,
                selected: post ? {...post} : {...state.selected},
            };
        case ADD_FILES:
            return {
                ...state,
                files: [...action.files],
            };
        case DELETE_FILE:
            return {
                ...state,
                files: array.deleteEl(action.id, state.files),
            };
        case ADD_FILE :
            return {
                ...state,
                files: [...state.files, action.file],
            };
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                selected: {...initPostState.selected}
            };
        case ADD_POSTS: {
            return {
                ...state,
                array: array.concat(state.array, action.posts),
            };
        }
        case ADD_POST: {
            return {
                ...state,
                array: [...state.array, action.post],
            };
        }
        case CLEAR_POSTS:
            return {
                ...state,
                array: [],
            };
        case UPDATE_POST:
            return {
                selected: action.post,
                array: array.replace(action.post, state.array),
            };
        case DELETE_POST_FROM_ARRAY:
            return {
                ...state,
                array: array.deleteEl(action.id, state.array),
            };
        default:
            return state;
    }
}


export const addFiles = files => ({
    type: ADD_FILES,
    files,
});

export const addFile = file => ({
    type: ADD_FILE,
    file,
});

export const deleteFile = id => ({
    type: DELETE_FILE,
    id,
});

export const selectPostById = id => ({ 
    type: SELECT_POST,
    id,
});

export const clearSelectedPost = () => ({ 
    type: CLEAR_SELECTED_POST,
});

export const addPosts = posts => ({ 
    type: ADD_POSTS,
    posts,
});

export const addPost = post => ({ 
    type: ADD_POST,
    post,
});

export const clearPosts = () => ({ 
    type: CLEAR_POSTS,
});

export const updatePost = post => ({
    type: UPDATE_POST,
    post,
});

export const deletePostById = id => ({
    type: DELETE_POST_FROM_ARRAY,
    id,
});


export const createFetch = post => dispatch => (
    PostApi.create(post).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addPost(data));
        } 
    }).catch(error => console.error(error))
);

export const updateFetch = post => dispatch => (
    PostApi.update(post).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(updatePost(data));
        }
    }).catch(error => console.error(error))
);

export const deleteFetch = id => dispatch => (
    PostApi.deleteById(id).then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(deletePostById(id));
        }
    }).catch(error => console.error(error))
);

export const getAllFetch = (page, limit) => dispatch => (
    PostApi.getAll(page, limit).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addPosts(data));
        }
    }).catch(error => console.error(error))
);

export const createFileFetch = (dirname, formData) => dispatch => (
    FileApi.create(dirname, formData).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addFile(data));
        }
    }).catch(error => console.error(error))
);

export const getFilesFetch = directoryId => dispatch => (
    FileApi.getByDirectoryId(directoryId).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addFiles(data));
        }
    }).catch(error => console.error(error))
);

export const deleteFileFetch = id => dispatch => (
    FileApi.deleteById(id).then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(deleteFile(id));
        }
    }).catch(error => console.error(error))
);

export default postReduser;