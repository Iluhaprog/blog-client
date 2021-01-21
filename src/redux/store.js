import { applyMiddleware, createStore } from 'redux';
import rootReduser from '../redusers';
import thunk from 'redux-thunk';

const store = createStore(
    rootReduser,
    applyMiddleware(thunk)
);

export default store;