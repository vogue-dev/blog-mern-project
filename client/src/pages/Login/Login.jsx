import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import LoginForm from '../../components/LoginForm/LoginForm.jsx';

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

        overflow-x: hidden;
    }
`;

const DottedWrapper = styled.div`
     {
        position: absolute;
        width: 100%;
        height: 100%;

        overflow-y: scroll;

        padding: 2em 1.5em 2em 1.5em;
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
        flex-wrap: wrap;
    }
`;

const LoginFormWrapper = styled.div`
     {
        max-width: 450px;
        margin: 0 auto;
        background-color: white;
        opacity: 0.2;
        transform: scale(0.9);
        transition-duration: 0.5s;

        &.active {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (min-width: 601px) {
        padding: 40px 20px;
    }

    @media (max-width: 600px) {
        padding: 20px 10px;
        max-width: 350px;
    }
`;

const Login = () => {
    let [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <LoginPage>
            <DottedWrapper>
                <LoginFormWrapper className={isActive ? 'active' : ''}>
                    <LoginForm />
                </LoginFormWrapper>
            </DottedWrapper>
        </LoginPage>
    );
};

export default Login;
