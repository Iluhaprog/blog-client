import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/stateSaver';
import thunk from 'redux-thunk';
import * as auth from './auth/authReducer';
import * as dir from './directory/directoryReducer';
import * as file from './file/fileReducer';
import * as home from './home/homeReducer';
import * as message from './message/messageReducer';
import * as modal from './modal/modalReducer';
import * as post from './post/postReducer';
import * as project from './project/projectReducer';
import * as settings from './settings/settingsReducer';
import * as social from './social/socialReducer';
import * as tag from './tag/tagReducer';
import * as user from './user/userReducer';
import * as win from './window/windowReducer';
import * as locale from './locale/localeReducer';
import * as bookmark from './bookmark/bookmarkReducer';
import {refreshToken} from '../utils/middlewares/refresh';

const rootReducer = combineReducers({
  auth: auth.authReducer,
  dir: dir.dirReducer,
  file: file.fileReducer,
  home: home.homeReducer,
  message: message.messageReducer,
  modal: modal.modalReducer,
  post: post.postReducer,
  project: project.projectReducer,
  settings: settings.settingsReducer,
  social: social.socialReducer,
  tag: tag.tagReducer,
  user: user.userReducer,
  window: win.windowReducer,
  locale: locale.localeReducer,
  bookmark: bookmark.bookmarkReducer,
});

const initialState = loadState();

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, refreshToken),
);

store.subscribe(() => {
  saveState({
    ...store.getState(),
  });
});

export {store};
