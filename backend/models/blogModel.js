import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
    readingTime:{
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})


const Blog = mongoose.model('Blog', blogSchema)

export default Blog