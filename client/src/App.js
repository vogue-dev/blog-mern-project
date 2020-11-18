import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import { routes } from './utils/routes.js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import AdminPanel from './pages/AdminPanel/AdminPanel.jsx';

const ContentWrapper = styled.div`
     {
        min-height: calc(100vh - 70px);
        height: 100%;
        margin-top: 70px;
        flex: 1 0 auto;
    }
`;

function App() {
    return (
        <>
            <Header />
            <Switch>
                <ContentWrapper>
                    {routes.map(({ path, exact, component, name }) => (
                        <Route path={path} exact={exact} component={component} key={name} />
                    ))}

                    <ProtectedRoute component={AdminPanel} exact={false} path="/admin" />
                </ContentWrapper>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
