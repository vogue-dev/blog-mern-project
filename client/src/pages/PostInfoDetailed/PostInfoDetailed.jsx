import React from 'react';
import { useParams } from 'react-router-dom';

import './post-info-detailed.scss';

const PostInfoDetailed = () => {
    const param = useParams();

    return (
        <div className="container">
            testic
            {console.log('param', param)}
        </div>
    );
};

export default PostInfoDetailed;
