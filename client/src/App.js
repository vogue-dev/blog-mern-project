import { Route, Switch } from 'react-router-dom';

import Ukraine from './pages/Ukraine/Ukraine.jsx';
import Europe from './pages/Europe/Europe.jsx';
import Main from './pages/Main/Main.jsx';
import Blog from './pages/Blog/Blog.jsx';
import News from './pages/News/News.jsx';

import Header from './components/Header/Header.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import AddPost from './pages/AdminPanel/AddPost/AddPost.jsx';
import DeletePost from './pages/AdminPanel/DeletePost/DeletePost.jsx';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/ukraine" exact component={Ukraine} />
				<Route path="/europe" exact component={Europe} />
				<Route path="/blog" exact component={Blog} />
				<Route path="/news" exact component={News} />

				<Route path="/admin" component={AdminPanel} />

				<div className="row">
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
