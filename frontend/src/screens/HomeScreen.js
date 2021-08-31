import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Blog from '../components/Blog/Blog'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listBlogs} from '../actions/blogActions'


const HomeScreen = () => {

    const dispatch = useDispatch()

    const blogList = useSelector(state => state.blogList)
    const {blogs, loading, error} = blogList 

    useEffect(()=>{
        dispatch(listBlogs())
    },[dispatch])

    return (
        <>
        <Container className="mt-4">
        <h2>Latest Posts</h2>
        <Row>
        {
            loading ? <Loader /> : error ? <Message variant="danger">error</Message> :
            <Col sm={12} md={7}>
           {
               blogs.map((e) => (
                    
                        <Blog
                            key={e._id}
                            title={e.title} 
                            article={e.article.length > 70 ? e.article.substring(0,70) : e.article}
                            name={e.name}
                            date={e.createdAt}
                            time={e.readingTime}
                            genre={e.genre}
                            id={e._id}
                         />
                    
               ))
           } 
           </Col>  
        }
            
        </Row>
        </Container>
        </>
    )
}

export default HomeScreen
