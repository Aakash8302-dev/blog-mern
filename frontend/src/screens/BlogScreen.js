import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogById } from '../actions/blogActions'

const BlogScreen = ({match}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogById(match.params.id))
    }, [match.params.id, dispatch])
    

    const singleBlog = useSelector(state => state.singleBlog)
    const {blog:{title, article, name}, loading, error} = singleBlog

    return (
        
            loading ? <Loader /> : error ? <Message varaint="danger">{error}</Message> : 
            
                <Container className="mt-4">
                    <h2>{title}</h2>
                    <p>{article}</p>
                </Container>
        
    )
}

export default BlogScreen
