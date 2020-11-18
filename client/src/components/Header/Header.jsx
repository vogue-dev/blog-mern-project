import React from 'react';
import { Link } from 'react-router-dom';
import { headerLinks } from '../../utils/constants.js';

import { RiLoginBoxLine } from 'react-icons/ri';

import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <div className="header__content--logo">
                        <Link to="/">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </Link>
                    </div>

                    <div className="header__content--links">
                        <ul>
                            {headerLinks.map(({ link, value }, i) => (
                                <Link to={link} key={i}>
                                    <li>{value}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="header__content--login">
                        <Link to="/admin">
                            <div className="login">
                                Admin
                                <RiLoginBoxLine />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
