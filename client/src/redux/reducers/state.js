import { getState } from '../store.js';

// let localStorage = getState('state');

const initialState = {
    postsEu: [],
    postsUa: [],
    isLoaded: false,
    isAdmin: false,
    rememberMe: false,
    swipiableMobilePanel: false,
};

const posts = (state = initialState, action) => {
    console.log('action.payload', action.payload);
    switch (action.type) {
        case 'SET_EU_POSTS':
            return {
                ...state,
                postsEu: action.payload,
                isLoaded: true,
            };

        case 'SET_UA_POSTS':
            return {
                ...state,
                postsUa: action.payload,
                isLoaded: true,
            };

        case 'SET_LOGIN':
            return {
                ...state,
                isAdmin: action.payload.isAdmin,
                rememberMe: action.payload.rememberMe,
            };

        // case 'SET_REMEMBER_ME':
        //     return {
        //         ...state,
        //         rememberMe: action.payload,
        //     };

        case 'SET_SWIPABLE_MOBILE_PANEL':
            return {
                ...state,
                swipiableMobilePanel: action.payload,
            };

        default:
            return state;
    }
};

export default posts;
