import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/stateSaver';
import thunk from 'redux-thunk';
import * as auth from './auth/authReducer';
import * as dir from './directory/directoryReducer';
import * as file from './file/fileReducer';
import * as home from './home/homeReduser';
import * as message from './message/messageReduser';
import * as modal from './modal/modalReduser';
import * as post from './post/postReduser';
import * as project from './project/projectReduser';
import * as settings from './settings/settingsReduser';
import * as social from './social/socialReduser';
import * as tag from './tag/tagReduser';
import * as user from './user/userReduser';

const rootReducer = combineReducers({
  auth: auth.authReducer,
  dir: dir.dirReducer,
  file: file.fileReduser,
  home: home.homeReduser,
  message: message.messageReduser,
  modal: modal.modalReduser,
  post: post.postReducer,
  project: project.projectReducer,
  settings: settings.settingsReduser,
  social: social.socialReduser,
  tag: tag.tagReducer,
  user: user.userReducer,
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
