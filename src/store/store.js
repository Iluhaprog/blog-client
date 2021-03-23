import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/stateSaver';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {dirReducer} from './directory/directoryReducer';
import {fileReduser} from './file/fileReducer';
import {homeReduser} from './home/homeReduser';
import {messageReduser} from './message/messageReduser';
import {modalReduser} from './modal/modalReduser';
import {postReducer} from './post/postReduser';
import {projectReducer} from './project/projectReduser';
import {socialReduser} from './social/socialReduser';
import {tagReducer} from './tag/tagReduser';
import {userReducer} from './user/userReduser';

const rootReducer = combineReducers({
  auth: authReducer,
  dir: dirReducer,
  file: fileReduser,
  home: homeReduser,
  message: messageReduser,
  modal: modalReduser,
  post: postReducer,
  project: projectReducer,
  social: socialReduser,
  tag: tagReducer,
  user: userReducer,
});
const initialState = loadState();

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);

store.subscribe(() => {
  saveState({
    ...store.getState(),
  });
});

export {store};
