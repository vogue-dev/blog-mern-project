import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Toasts from '../Toasts/Toasts.jsx';

import './application-wrapper.scss';

const ContentWrapper = styled.div`
     {
        /* min-height: calc(100vh - 70px); */
        /* height: 100%; */

        margin-top: 64px;
        flex: 1 0 auto;
    }
`;

const ApplicationWrapper = ({ path, exact, component, name }) => {
    return (
        <>
            <Toasts />
            <Header />
            <ContentWrapper>
                <Route path={path} exact={exact} component={component} key={name} />
            </ContentWrapper>
            <Footer />
        </>
    );
};

export default ApplicationWrapper;
