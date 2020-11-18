import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { login } from '../../redux/actions/state.js';
import Modal from '../../components/Modal/Modal.jsx';

const LoginPage = styled.div`
     {
        position: absolute;
        width: 100%;
        height: calc(100% - 140px);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Login = () => {
    const dispatch = useDispatch();

    const onLogin = () => {
        let isBoss = window.confirm('Ты здесь главный?');
        dispatch(login(isBoss));
        isBoss ? alert('login success!') : alert('вы не админ');
    };

    return (
        <LoginPage>
            <Modal onLogin={onLogin} />
        </LoginPage>
    );
};

export default Login;
