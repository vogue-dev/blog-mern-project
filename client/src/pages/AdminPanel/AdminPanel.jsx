import React from 'react';
import LeftMenuNavigation from './LeftMenuNavigation/LeftMenuNavigation.jsx';
// import { Route, Switch } from 'react-router-dom';

// import AddPost from '../../components/AdminPanel/AddPost/AddPost.jsx';
// import DeletePost from '../../components/AdminPanel/DeletePost/DeletePost.jsx';

import './admin-panel.scss';

const AdminPanel = () => {
	return (
		<>
			<div className="admin-panel row">
				<div className="left">
					<LeftMenuNavigation />
				</div>
			</div>
		</>
	);
};

export default AdminPanel;
