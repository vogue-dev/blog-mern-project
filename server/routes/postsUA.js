import express from 'express';

import { getPostsUA } from '../controllers/postsUA.js';

const router = express.Router();

router.get('/', getPostsUA);
// router.post('/', createPostsUA);

export default router;
