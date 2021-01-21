import PostApi from '../api/PostApi';

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
    array: [],
};

const SELECT_POST = 'SELECT_POST';
const CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST';
const ADD_POSTS = 'ADD_POSTS';
const ADD_POST = 'ADD_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST_FROM_ARRAY = 'DELETE_POST_FROM_ARRAY';

const postReduser = (state = initPostState, action) => {
    switch(action.type) {
        case SELECT_POST:
            const post = state.array.find(post => post.id === action.id);
            return {
                ...state,
                selected: post ? {...post} : {...state.selected},
            };
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                selected: {...initPostState.selected}
            };
        case ADD_POSTS: {
            return {
                ...state,
                array: [...state.array, ...action.posts],
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
                array: state.array.map(post => {
                    if (post.id === action.post.id) {
                        return action.post;
                    }
                    return post;
                }),
            };
        case DELETE_POST_FROM_ARRAY:
            return {
                ...state,
                array: state.array.filter(post => post.id !== action.id),
            };
        default:
            return state;
    }
}

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


export default postReduser;