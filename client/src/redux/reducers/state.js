const initialState = {
    postsUa: [],
    postsEu: [],
    isLoaded: false,
    isLogin: false,
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
                isLogin: action.payload,
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
