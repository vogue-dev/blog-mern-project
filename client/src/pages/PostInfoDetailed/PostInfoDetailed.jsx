import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchingPostsUa } from '../../redux/actions/state.js';

import './post-info-detailed.scss';

const PostInfoDetailed = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const postsUa = useSelector(({ state }) => state.postsUa);

    let currentPostUa = postsUa.filter((p) => p._id === param.post_uid.toString());
    currentPostUa = currentPostUa[0];

    useEffect(() => {
        dispatch(fetchingPostsUa('ukraine'));
    }, [dispatch]);

    return <div className="container">{console.log(currentPostUa)}testic</div>;
};

export default PostInfoDetailed;
