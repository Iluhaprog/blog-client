import PostApi from '../api/PostApi';
import FileApi from '../api/FileApi';

export const SELECT_POST = 'SELECT_POST';
export const CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_POST = 'ADD_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST_FROM_ARRAY = 'DELETE_POST_FROM_ARRAY';
export const ADD_FILES = 'ADD_FILES';
export const ADD_FILE = 'ADD_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const SET_TOTAL = 'SET_TOTAL';


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

export const setTotal = total => ({
    type: SET_TOTAL,
    total,
});

export const setTotalFetch = () => dispatch => (
    PostApi.getCount().then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setTotal(data.count));
        }
    }).catch(error => console.error(error))
)

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