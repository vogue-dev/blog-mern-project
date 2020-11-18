import React from 'react';
import { useDispatch } from 'react-redux';

import './login.scss';
import { login } from '../../../redux/actions/state.js';

const Login = () => {
    const dispatch = useDispatch();

    const onLogin = () => {
        let isBoss = window.confirm('Ты здесь главный?');
        dispatch(login(isBoss));
        isBoss ? alert('login success!') : alert('вы не админ');
    };

    return (
        <div>
            <buttom onClick={onLogin}>Войти в админку</buttom>
        </div>
    );
};

export default Login;
