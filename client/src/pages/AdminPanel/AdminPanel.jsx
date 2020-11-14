import React from 'react';
import Header from '../../components/Header/Header.jsx';
import MenuNavigation from '../../components/AdminPanel/MenuNavigation/MenuNavigation.jsx';
// import { Route, Switch } from 'react-router-dom';

// import AddPost from '../../components/AdminPanel/AddPost/AddPost.jsx';
// import DeletePost from '../../components/AdminPanel/DeletePost/DeletePost.jsx';

import './admin-panel.scss';

const AdminPanel = () => {
	return (
		<>
			<div className="admin-panel row">
				<div className="left">
					<MenuNavigation />
				</div>
			</div>
		</>
	);
};

export default AdminPanel;
