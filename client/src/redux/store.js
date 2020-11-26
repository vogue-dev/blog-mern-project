import { createStore, applyMiddleware, compose } from 'redux';
import { throttle } from 'lodash';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index.js';

// get state from localStorage
export const getState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            // return undefined;
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// save state to localStorage
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

const persistedState = getState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(
    throttle(() => {
        saveState({
            isAdmin: store.getState().state.isAdmin,
            rememberMe: store.getState().state.rememberMe,
        });
    }, 1000)
);

export default store;
