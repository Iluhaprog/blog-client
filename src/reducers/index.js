import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';
import userReduser from './UserReducer';
import postReduser from './PostReducer';
import projectReducer from './ProjectReducer';
import tagReducer from './TagReducer';
import commentReducer from './CommentReducer';

export default combineReducers({
    user: userReduser,
    post: postReduser,
    project: projectReducer,
    tags: tagReducer,
    comment: commentReducer,
    form: formReduser,
});