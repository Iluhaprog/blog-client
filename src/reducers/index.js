import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReduser from './UserReducer';
import postReduser from './PostReducer';
import projectReducer from './ProjectReducer';
import tagReducer from './TagReducer';
import commentReducer from './CommentReducer';
import modalReducer from './ModalReducer';
import homeReducer from './HomeReducer';
import themeReducer from './ThemeReducer';
import errorReducer from './ErrorReducer';

export default combineReducers({
    user: userReduser,
    post: postReduser,
    theme: themeReducer,
    project: projectReducer,
    home: homeReducer,
    tags: tagReducer,
    comment: commentReducer,
    modal: modalReducer,
    error: errorReducer,
    form: formReducer,
});