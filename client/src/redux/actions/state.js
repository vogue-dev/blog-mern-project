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

export const setAdmin = (param) => async (dispatch) => {
    dispatch(setLogin(param));
};

export const setLogin = (param) => ({
    type: 'SET_LOGIN',
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
