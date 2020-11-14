import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="logo">
						<Link to="/">Logo</Link>
					</div>
					<div className="links">
						<ul>
							<li>Дешевые билеты</li>
							<li>Что посетить - Украина</li>
							<li>Новости</li>
							<li>Годнота/Блог</li>
						</ul>
					</div>
					<div className="login">
						<Link to="/admin">Админка</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
