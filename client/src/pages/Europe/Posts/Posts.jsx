import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../../components/Card/Card.jsx';
import Aside from '../../../components/Aside/Aside.jsx';
import { baseUrl } from '../../../utils/constants.js';

import './europe-posts.scss';

const Posts = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchingData = async () => {
            await axios.get(`${baseUrl}/posts`).then((result) => setData(result.data));
            await setIsLoaded(true);
        };

        fetchingData();
    }, []);

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
