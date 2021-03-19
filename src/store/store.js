import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loadState, saveState} from '../utils/stateSaver';
import thunk from 'redux-thunk';
import {errorReducer} from './error/errorReducer';
import {authReducer} from './auth/authReducer';
import {dirReducer} from './directory/directoryReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  auth: authReducer,
  dir: dirReducer,
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

export default store;
