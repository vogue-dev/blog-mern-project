import React from 'react';
import { Link } from 'react-router-dom';

import './left-menu-nav.scss';

const LeftMenuNav = () => {
    return (
        <div className="left-manu-nav">
            <ul>
                <Link to="/admin/add-post">
                    <li>Создать пост</li>
                </Link>
                <li>Редактировать пост</li>
                <li>Удалить пост</li>
                <li>-------------</li>
                <li>Список постов</li>
            </ul>
        </div>
    );
};

export default LeftMenuNav;
