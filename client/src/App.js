import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import { routes } from './utils/routes.js';

const ContentWrapper = styled.div`
     {
        min-height: calc(100vh - 70px);
        margin-top: 70px;
        flex: 1 0 auto;
    }
`;

function App() {
    return (
        <>
            <Header />
            <ContentWrapper>
                <Switch>
                    {routes.map(({ path, exact, component, name }) => (
                        <Route path={path} exact={exact} component={component} key={name} />
                    ))}
                </Switch>
            </ContentWrapper>
            <Footer />
        </>
    );
}

export default App;
