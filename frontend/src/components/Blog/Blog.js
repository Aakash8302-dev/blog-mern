import React from 'react'
import {Link} from 'react-router-dom'
import './Blog.css'

const Blog = ({title, article, name, date, time,genre,id}) => {

    return (
        <Link to={`/api/blogs/${id}`} style={{"textDecoration": 'none'}}>
        <div className="blog">
            <h6>{name}</h6>
            <h5 className="blogTitle" number>{title}</h5>
            <p className="blogBody">{article}</p>
            <div className="blogFooter">
                <div>{time} min read</div>
                <div>{genre}</div>
            </div>
        </div>
        </Link>
    )
}

export default Blog
