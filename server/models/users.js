import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
	userId: Number,
	id: String,
	title: String,
});

const Users = mongoose.model('Posts', usersSchema);

export default Users;
