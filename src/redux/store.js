import { applyMiddleware, createStore } from 'redux';
import rootReduser from '../reducers';
import thunk from 'redux-thunk';
import { saveState, loadState } from '../util/store';

const initialState = loadState();

const store = createStore(
    rootReduser,
    initialState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState({
        ...store.getState()
    });
});

export default store;