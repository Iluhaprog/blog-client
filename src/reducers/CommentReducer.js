import CommentApi from '../api/CommentApi';
import * as array from '../util/array';

const initCommentState = {
    comments: [],
};

const ADD_COMMENT = 'ADD_COMMENT';
const SET_COMMENTS = 'SET_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';

const commentReducer = (state = initCommentState, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.comment],
            };
        case SET_COMMENTS:
            return {
                comments: [...action.comments],
            };
        case DELETE_COMMENT:
            return {
                comments: array.deleteEl(action.id, state.comments),
            };
        default:
            return state;
    }
}


export const addComment = comment => ({
    type: ADD_COMMENT,
    comment,
});

export const setComments = comments => ({
    type: SET_COMMENTS,
    comments,
});

export const deleteComment = id => ({
    type: DELETE_COMMENT,
    id,
});


export const createCommentFetch = comment => dispatch => (
    CommentApi.create(comment).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(addComment(data));
        }
    }).catch(error => console.error(error))
);

export const getCommentsByPostIdFetch = (postId, page, limit) => dispatch => (
    CommentApi.getByPostId(postId, page, limit).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setComments(data));
        }
    }).catch(error => console.error(error))
);

export const deleteCommentFetch = id => dispatch => (
    CommentApi.deleteById(id).then(response => {
        const { status } = response;
        if (status === 204) {
            dispatch(deleteComment(id));
        }
    }).catch(error => console.error(error))
);

export default commentReducer;