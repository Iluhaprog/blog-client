import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';
import userReduser from './UserReducer';
import postReduser from './PostReducer';
import projectReducer from './ProjectReducer';

export default combineReducers({
    user: userReduser,
    post: postReduser,
    project: projectReducer,
    form: formReduser,
});