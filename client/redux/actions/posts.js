import axios from 'axios';
import baseUrl from '../../src/utils/constants.js';

export const fetchingPostsUa = (num) => async (dispatch) => {
    axios.get(baseUrl).then((response) => dispatch(setPostsUa(response.data)));
};

export const setPostsUa = (data) => ({
    type: 'SET_UA_POSTS',
    payload: data,
});

export const setPostsEu = (data) => ({
    type: 'SET_EU_POSTS',
    payload: data,
});

export const setFetching = (payload) => ({
    type: 'SET_DATA_FETCHING',
    payload,
});
