const initialState = {
    postsEu: [],
    postsUa: [],
    isLoaded: false,
    isAdmin: false,
    swipiableMobilePanel: false,
};

const posts = (state = initialState, action) => {
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
                isAdmin: action.payload,
            };

        case 'SET_SWIPABLE_MOBILE_PANEL':
            return {
                ...state,
                swipiableMobilePanel: action.payload,
            };

        // case 'SET_CURRENT_PAGE':
        //     return {
        //         ...state,
        //         currentPage: action.payload,
        //     };

        // case 'SET_PAGINATION':
        //     return {
        //         ...state,
        //         pagination: action.payload,
        //     };

        default:
            return state;
    }
};

export default posts;
