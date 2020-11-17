import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchingPostsUa } from '../../../redux/actions/posts.js';

import Card from '../../../components/Card/Card.jsx';
import Aside from '../../../components/Aside/Aside.jsx';

import './ukraine-posts.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ posts }) => posts.postsUa);
    const isLoaded = useSelector(({ posts }) => posts.isLoaded);

    useEffect(() => {
        dispatch(fetchingPostsUa('ukraine'));
    }, [dispatch]);

    return isLoaded ? (
        <main>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <div className="cards">
                            {data.map((card, i) => (
                                <Card card={card} key={i} />
                            ))}
                        </div>
                        {/* <ul>
							{data.map((e) => (
								<li key={e.id}>{e.title}</li>
							))}
						</ul> */}
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
