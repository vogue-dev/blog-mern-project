import axios from 'axios';
import { baseUrl } from '../../utils/constants.js';

export const fetchingPostsEu = (helper) => (dispatch) => {
    setFetching(false);
    axios.get(`${baseUrl}/${helper}`).then((response) => dispatch(setPostsEu(response.data)));
};

export const fetchingPostsUa = (helper) => (dispatch) => {
    setFetching(false);
    axios.get(`${baseUrl}/${helper}`).then((response) => dispatch(setPostsUa(response.data)));
};

export const setAdmin = (isAdmin, rememberMe) => async (dispatch) => {
    dispatch({ type: 'SET_LOGIN', payload: { isAdmin, rememberMe } });
};

// export const setLogin = (param) => ({
//     type: 'SET_LOGIN',
//     payload: param,
// });

export const setRememberMe = (param) => ({
    type: 'SET_REMEMBER_ME',
    payload: param,
});

export const setPostsEu = (data) => ({
    type: 'SET_EU_POSTS',
    payload: data,
});

export const setPostsUa = (data) => ({
    type: 'SET_UA_POSTS',
    payload: data,
});

export const setFetching = (payload) => ({
    type: 'SET_DATA_FETCHING',
    payload,
});
