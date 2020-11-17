import React from 'react';
import { Link } from 'react-router-dom';

import './card.scss';

const Card = ({ card }) => {
    let { title, price, description, date, readingTime, image, titleStatus, _id } = card;

    const onClickOpenDetails = () => {
        console.log('unique_id', _id);
    };

    return (
        <div className="card">
            <div className="card__wrapper" onClick={(_id) => onClickOpenDetails(_id)}>
                <Link to={`/post/${_id}`}>
                    <div className="card__body">
                        <div className="card__body--img">
                            <img src={image} alt="abc"></img>
                        </div>
                        <div className="card__body--rating"></div>
                        <div className="card__body--details">
                            <div className="date">Самолет + Автобус</div>
                            <div className="reading">unique id: {_id}</div>
                        </div>
                    </div>

                    <div className="card__footer">
                        <div className="jc-sb pb-15">
                            <div className={`card__footer--destination ${titleStatus}`}>
                                {title}
                            </div>
                            <div className={`card__footer--price ${titleStatus}`}>{price} €</div>
                        </div>

                        <div className="card__footer--description pb-15">{description}</div>

                        <div className="jc-sb">
                            <div className="card__footer--date">{date}</div>
                            <div className="card__footer--reading">
                                Прочитаешь за {readingTime} мин
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;
