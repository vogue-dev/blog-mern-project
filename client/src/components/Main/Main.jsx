import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './main.scss';

const Main = () => {
	const url = 'http://localhost:5000/posts';
	const [data, setData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const fetchingData = async () => {
			await axios.get(url).then((result) => setData(result.data));
			await setIsLoaded(true);
		};

		fetchingData();
	}, []);

	return isLoaded ? (
		<main>
			<div className="container">
				<div className="row">
					<div className="content">
						<div className="cards">
							<div className="card">
								<div className="card__wrapper">
									<img
										src="https://media.gq.ru/photos/5d9f7bce98ca7700089b131f/16:9/w_1920,c_limit/fd09c4ec7d955e4cfc33c5c23fd3d8dcd9cd368e.jpeg"
										alt="abc"></img>
									<div className="card--title">Kiev --> London</div>
									<div className="card--price">950 $</div>
								</div>
							</div>

							<div className="card">
								<div className="card__wrapper">
									<img
										src="https://media.gq.ru/photos/5d9f7bce98ca7700089b131f/16:9/w_1920,c_limit/fd09c4ec7d955e4cfc33c5c23fd3d8dcd9cd368e.jpeg"
										alt="abc"></img>
									<div className="card--title">Kiev --> London</div>
									<div className="card--price">950 $</div>
								</div>
							</div>

							<div className="card">
								<div className="card__wrapper">
									<img
										src="https://media.gq.ru/photos/5d9f7bce98ca7700089b131f/16:9/w_1920,c_limit/fd09c4ec7d955e4cfc33c5c23fd3d8dcd9cd368e.jpeg"
										alt="abc"></img>
									<div className="card--title">Kiev --> London</div>
									<div className="card--price">950 $</div>
								</div>
							</div>

							<div className="card">
								<div className="card__wrapper">
									<img
										src="https://media.gq.ru/photos/5d9f7bce98ca7700089b131f/16:9/w_1920,c_limit/fd09c4ec7d955e4cfc33c5c23fd3d8dcd9cd368e.jpeg"
										alt="abc"></img>
									<div className="card--title">Kiev --> London</div>
									<div className="card--price">950 $</div>
								</div>
							</div>
						</div>
						<ul>
							{data.map((e) => (
								<li key={e.id}>{e.title}</li>
							))}
						</ul>
					</div>
					<aside></aside>
				</div>
			</div>
		</main>
	) : (
		<div>Loading...</div>
	);
};

export default Main;
