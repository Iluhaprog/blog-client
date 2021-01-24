import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';
import userReduser from './UserReduser';
import postReduser from './PostReduser';
import projectReducer from './ProjectReducer';

export default combineReducers({
    user: userReduser,
    post: postReduser,
    project: projectReducer,
    form: formReduser,
});