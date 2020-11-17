import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AddPost from './Posts/AddPost.jsx';
import DeletePost from './Posts/DeletePost.jsx';

import './admin-panel.scss';

const AdminPanel = () => {
    return (
        <>
            <div className="admin-panel row">
                <div className="admin-panel--left">
                    <div className="left-manu-nav">
                        <ul>
                            <Link to="/admin/add-post">
                                <li>Создать пост</li>
                            </Link>
                            <Link to="/admin/delete-post">
                                <li>Удалить пост</li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="admin-panel--right">
                    <div className="right-c">
                        <Switch>
                            <Route path="/admin/add-post" component={AddPost} />
                            <Route path="/admin/delete-post" component={DeletePost} />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
