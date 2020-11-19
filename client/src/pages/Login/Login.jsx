import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { login } from '../../redux/actions/state.js';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const DottedWrapper = styled.div`
     {
        width: 100%;
        height: 100%;

        padding: 2.25em 1.6875em;
        background-image: -webkit-repeating-radial-gradient(
            center center,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2) 1px,
            transparent 1px,
            transparent 100%
        );
        background-image: -moz-repeating-radial-gradient(
            center center,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2) 1px,
            transparent 1px,
            transparent 100%
        );
        background-image: -ms-repeating-radial-gradient(
            center center,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2) 1px,
            transparent 1px,
            transparent 100%
        );
        background-image: repeating-radial-gradient(
            center center,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.2) 1px,
            transparent 1px,
            transparent 100%
        );
        -webkit-background-size: 3px 3px;
        -moz-background-size: 3px 3px;
        background-size: 3px 3px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const LoginPage = styled.div`
     {
        position: absolute;
        width: 100%;
        height: 100%;

        // background-image: url('https://images.wallpaperscraft.ru/image/devushka_puteshestvie_kemping_166108_1920x1080.jpg');
        background-image: url('https://images.hdqwalls.com/download/travel-hd-1920x1080.jpg');

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
`;

const LoginFormWrapper = styled.div`
     {
        padding: 40px 20px;
        background-color: white;
        opacity: 0.2;
        transform: scale(0.9);
        transition-duration: 0.5s;

        &.active {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    let [isActive, setIsActive] = useState(false);

    const onLogin = () => {
        let isBoss = window.confirm('Ты здесь главный?');
        dispatch(login(isBoss));
        if (isBoss) {
            alert('login success!');
            history.push('/admin');
        } else alert('вы не админ');
    };

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <LoginPage>
            <DottedWrapper>
                <LoginFormWrapper className={isActive ? 'active' : ''}>
                    <LoginForm onLogin={onLogin} />
                </LoginFormWrapper>
            </DottedWrapper>
        </LoginPage>
    );
};

export default Login;
