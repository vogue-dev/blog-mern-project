import React from 'react';

import './card.scss';

const Card = ({ card }) => {
	let { title, price, description, date, readingTime, image, titleStatus } = card;

	return (
		<div className="card">
			<div className="card__wrapper">
				<div className="card__body">
					<div className="card__body--img">
						<img src={image} alt="abc"></img>
					</div>
					<div className="card__body--rating"></div>
					<div className="card__body--details">
						<div className="date">13 нояб 2020</div>
						<div className="reading">Чтение: {readingTime} мин</div>
					</div>
				</div>

				<div className="card__footer">
					<div className="jc-sb pb-15">
						<div className={`card__footer--destination ${titleStatus}`}>{title}</div>
						<div className={`card__footer--price ${titleStatus}`}>{price} €</div>
					</div>

					<div className="card__footer--description pb-15">{description}</div>

					<div className="jc-sb">
						<div className="card__footer--date">{date}</div>
						<div className="card__footer--reading">Прочитаешь за {readingTime} мин</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
