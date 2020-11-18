import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchingPostsUa } from '../../../redux/actions/state.js';

import Card from '../../../components/Card/Card.jsx';
import Aside from '../../../components/Aside/Aside.jsx';

import './ukraine-posts.scss';

const Posts = () => {
    const ukraine = 'ukraine';
    const dispatch = useDispatch();
    const data = useSelector(({ state }) => state.postsUa);
    const isLoaded = useSelector(({ state }) => state.isLoaded);

    useEffect(() => {
        dispatch(fetchingPostsUa(ukraine));
    }, [dispatch]);

    return isLoaded ? (
        <main>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <div className="cards">
                            {data.map((card, i) => (
                                <Card card={card} key={i} param={ukraine} />
                            ))}
                        </div>
                    </div>
                    <Aside />
                </div>
            </div>
        </main>
    ) : (
        <div>Loading...</div>
    );
};

export default Posts;
