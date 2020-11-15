import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LeftMenuNavigation from './pages/AdminPanel/LeftMenuNavigation/LeftMenuNavigation.jsx';
import AddPost from './pages/AdminPanel/AddPost/AddPost.jsx';
import DeletePost from './pages/AdminPanel/DeletePost/DeletePost.jsx';

import { routes } from './utils/routes.js';

function App() {
    return (
        <>
            <Header />
            <Switch>
                {routes.map(({ path, exact, component, name }) => (
                    <Route path={path} exact={exact} component={component} key={name} />
                ))}

                <div className="row">
                    <LeftMenuNavigation />
                    <div className="right-c">
                        <Route path="/admin/add-post" exact component={AddPost} />
                        <Route path="/admin/delete-post" exact component={DeletePost} />
                    </div>
                </div>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
