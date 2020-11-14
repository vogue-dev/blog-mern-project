import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import MenuNavigation from './components/AdminPanel/MenuNavigation/MenuNavigation.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import MainPage from './pages/MainPage/MainPage';
import AddPost from './components/AdminPanel/AddPost/AddPost.jsx';
import DeletePost from './components/AdminPanel/DeletePost/DeletePost.jsx';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/admin" exact component={AdminPanel} />

				<div className="row">
					<MenuNavigation />
					<div className="right-c">
						<Route path="/admin/add-post" exact component={AddPost} />
						<Route path="/admin/delete-post" exact component={DeletePost} />
					</div>
				</div>
			</Switch>
		</>
	);
}

export default App;
