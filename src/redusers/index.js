import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';
import userReduser from './UserReduser';
import postReduser from './PostReduser';

export default combineReducers({
    user: userReduser,
    post: postReduser,
    form: formReduser,
});