import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddPost = () => {
	const title = useRef();
	const titleStatus = useRef();
	const price = useRef();
	const description = useRef();
	const date = useRef();
	const readingTime = useRef();
	const image = useRef();

	let [state, setState] = useState({});

	const addValues = ({ target }) => {
		setState({ ...state, [target.name]: target.value });
	};

	const addNewPost = (e) => {
		e.preventDefault();
		console.log('state', state);
		axios.post('http://localhost:5000/posts', state);
	};

	return (
		<div>
			AddPost
			<form className="fd-c" onSubmit={addNewPost} onChange={addValues}>
				<input ref={title} name="title" placeholder="title"></input>
				<input ref={titleStatus} name="titleStatus" placeholder="titleStatus"></input>
				<input ref={price} name="price" placeholder="price"></input>
				<input ref={description} name="description" placeholder="description"></input>
				<input ref={date} name="date" placeholder="date"></input>
				<input ref={readingTime} type="number" name="readingTime" placeholder="readingTime"></input>
				<input ref={image} name="image" placeholder="ссылка на картинку 16:9 (jpg/png)"></input>

				<button>Подтвердить</button>
			</form>
		</div>
	);
};

export default AddPost;
