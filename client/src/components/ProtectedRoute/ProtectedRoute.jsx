import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAdmin = useSelector(({ state }) => state.isAdmin);

    return (
        <>
            <Route
                {...rest}
                render={(props) =>
                    isAdmin ? (
                        <>
                            <Component {...props} />
                        </>
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
        </>
    );
};

export default ProtectedRoute;
