import * as array from '../util/array';
import { ADD_COMMENT, SET_COMMENTS, DELETE_COMMENT } from '../actoins/comment';

const initCommentState = {
    comments: [],
};

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

export default commentReducer;