import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchingPostsEu } from '../../../redux/actions/state.js';

import Card from '../../../components/Card/Card.jsx';
import Aside from '../../../components/Aside/Aside.jsx';

import './europe-posts.scss';

const Posts = () => {
    const europe = 'europe';
    const dispatch = useDispatch();
    const data = useSelector(({ state }) => state.postsEu);
    const isLoaded = useSelector(({ state }) => state.isLoaded);

    useEffect(() => {
        dispatch(fetchingPostsEu(europe));
    }, [dispatch]);

    return isLoaded ? (
        <main>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <div className="cards">
                            {data.map((card, i) => (
                                <Card card={card} key={i} param={europe} />
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
