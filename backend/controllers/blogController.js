
import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'


// @desc Fetch all Blogs
// @route GET /api/blogs
// @access PUBLIC
const getBlogs = asyncHandler( async(req,res) => {
    const blogs = await Blog.find({})
    res.json(blogs)
})


//@desc Fetch single Blog
//@route GET/api/blogs/:id
//@access PUBLIC
const getBlogsById = asyncHandler( async(req,res) => {
    const blog = await Blog.findById(req.params.id)

    if(blog){
        res.json(blog)
    }else{
        res.status(404)
        throw new Error('Blog Not Found')
    }
})


//@desc Create Blog
//@route POST/api/blogs/create
//@access PRIVATE
const createBlog = asyncHandler( async(req,res) => {
    const {title, article, readingTime, genre} = req.body

    const blog = await Blog.create({
        userId: req.user.id,
        name: req.user.name,
        title,
        article,
        readingTime,
        genre
    }) 
  
    if(blog){
        res.status(201).json(blog)
    }else{
        res.status(400)
        throw new Error("Error Creating Blog")
    } 
})

export {getBlogs, getBlogsById, createBlog}