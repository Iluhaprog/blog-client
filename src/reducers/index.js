import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
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
    form: formReducer,
});