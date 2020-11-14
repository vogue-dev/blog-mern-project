import PostsUA from '../models/postsUA.js';

export const getPostsUA = async (req, res) => {
	try {
		const postMessages = await PostsUA.find();

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
