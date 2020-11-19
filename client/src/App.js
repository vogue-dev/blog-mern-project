import { Route, Switch } from 'react-router-dom';

import { routes } from './utils/routes.js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import ApplicationWrapper from './components/ApplicationWrapper/ApplicationWrapper.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel.jsx';
import Login from './pages/Login/Login.jsx';

function App() {
    return (
        <>
            <Switch>
                {routes.map(({ path, exact, component, name }) => (
                    <ApplicationWrapper
                        path={path}
                        exact={exact}
                        component={component}
                        key={name}
                    />
                ))}

                <ProtectedRoute path="/admin" component={AdminPanel} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </>
    );
}

export default App;
