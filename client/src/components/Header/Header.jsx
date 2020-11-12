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
							<li>First Link</li>
							<li>Second Link</li>
							<li>Third Link</li>
						</ul>
					</div>
					<div className="login">Login</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
