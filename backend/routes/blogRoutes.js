import express from 'express'
import {getBlogs, getBlogsById, createBlog} from '../controllers/blogController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getBlogs)
router.route('/:id').get(getBlogsById)
router.route('/create').post(protect, createBlog)

export default router