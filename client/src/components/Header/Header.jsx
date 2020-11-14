import React from 'react';
import { Link } from 'react-router-dom';
import { headerLinks } from '../../utils/constants.js';

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
							{headerLinks.map((i) => (
								<Link to={`${i.link}`}>
									<li>{i.value}</li>
								</Link>
							))}
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
