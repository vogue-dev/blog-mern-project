import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import { routes } from './utils/routes.js';

const ContentWrapper = styled.div`
     {
        height: 100%;
        min-height: 100vh;
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
                </ContentWrapper>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
