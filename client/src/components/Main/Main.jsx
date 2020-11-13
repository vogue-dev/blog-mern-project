import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card.jsx';
import Aside from '../Aside/Aside.jsx';
import { cards } from '../../db';

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
							{cards.map((card) => (
								<Card card={card} key={card.id} />
							))}
						</div>
						{/* <ul>
							{data.map((e) => (
								<li key={e.id}>{e.title}</li>
							))}
						</ul> */}
					</div>
					<Aside />
				</div>
			</div>
		</main>
	) : (
		<div>Loading...</div>
	);
};

export default Main;
