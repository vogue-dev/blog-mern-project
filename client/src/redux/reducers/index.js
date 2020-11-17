import { combineReducers } from 'redux';

import state from './state.js';

const rootReducer = combineReducers({
    state,
});

export default rootReducer;
