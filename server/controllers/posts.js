import PostMessage from '../models/postMessage.js';
import Users from '../models/users.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Users.find();
		console.log('TEST', postMessages);

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	console.log('req.body', req.body);
	const post = req.body;
	const newPost = new PostMessage(post);

	try {
		await NewPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
