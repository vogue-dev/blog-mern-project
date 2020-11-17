import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},

	button: {
		margin: theme.spacing(1),
	},
}));

export default function BasicTextFields() {
	let [newPost, setNewPost] = useState({
		title: 'test1-title',
		message: 'test1-message',
		creator: 'test1-creator',
		tag: 'test1-tag1',
	});

	// const sendingForm = (e) => {
	// 	e.preventDefault();

	// 	// console.log(newPost);
	// 	async function posting(newPost) {
	// 		await axios.post('http://localhost:5000/posts', newPost);
	// 	}
	// 	posting();
	// };

	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off" onSubmit={sendingForm}>
			<TextField
				id="outlined-basic"
				name="title"
				label="Title"
				variant="outlined"
				value={newPost.title}
			/>
			<TextField
				id="outlined-basic"
				name="message"
				label="Message"
				variant="outlined"
				value={newPost.message}
			/>
			<TextField
				id="outlined-basic"
				name="creator"
				label="Creator"
				variant="outlined"
				value={newPost.creator}
			/>
			<TextField
				id="outlined-basic"
				name="tag"
				label="Tag"
				variant="outlined"
				value={newPost.tag}
			/>
			<Button type="submit" size="large" variant="outlined" color="secondary">
				Secondary
			</Button>
		</form>
	);
}
