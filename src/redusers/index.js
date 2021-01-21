import userReduser from './UserReduser';
import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';

export default combineReducers({
    user: userReduser,
    form: formReduser,
});