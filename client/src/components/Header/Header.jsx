import React from 'react';

import './header.scss';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="logo">Logo</div>
					<div className="links">
						<ul>
							<li>Дешевые билеты</li>
							<li>Что посетить - Украина</li>
							<li>Новости</li>
							<li>Годнота/Блог</li>
						</ul>
					</div>
					<div className="login">Login</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
