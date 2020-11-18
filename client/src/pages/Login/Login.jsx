import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogin = () => {
        let isBoss = window.confirm('Ты здесь главный?');
        dispatch(login(isBoss));
        if (isBoss) {
            alert('login success!');
            history.push('/admin');
        } else alert('вы не админ');
    };

    return (
        <LoginPage>
            <Modal onLogin={onLogin} />
        </LoginPage>
    );
};

export default Login;
