import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { fetchingPostsUa } from '../../redux/actions/state.js';

import './post-info-detailed.scss';

const PostInfoDetailed = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const param = useParams();

    let historyFirstParam = history.location.pathname.split('/')[1];
    const isLoaded = useSelector(({ state }) => state.isLoaded);
    const posts = useSelector(({ state }) =>
        historyFirstParam === 'ukraine'
            ? state.postsUa
            : historyFirstParam === 'ukraine'
            ? state.postsEu
            : null
    );

    let currentPostUa = posts.filter((p) => p._id === param.post_uid.toString());
    currentPostUa = currentPostUa[0];

    useEffect(() => {
        !currentPostUa && dispatch(fetchingPostsUa(historyFirstParam));
    }, [dispatch]);

    return (
        <>
            {isLoaded ? (
                <div className="container">
                    {console.log('currentPostUa', currentPostUa)}
                    <h1>Title:{currentPostUa.title}</h1>
                    <img src={currentPostUa.image} alt={currentPostUa.title} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default PostInfoDetailed;
