import CommentApi from '../api/CommentApi';

export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_COMMENTS = 'SET_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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
    })
);

export const getCommentsByPostIdFetch = (postId, page, limit) => dispatch => (
    CommentApi.getByPostId(postId, page, limit).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setComments(data));
        }
    })
);

export const deleteCommentFetch = id => dispatch => (
    CommentApi.deleteById(id).then(response => {
        const { status } = response;
        if (status === 204) {
            dispatch(deleteComment(id));
        }
    })
);