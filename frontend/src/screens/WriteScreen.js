import React,{useState, useEffect} from 'react'
import FormContainer from '../components/FormContainer'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { createBlog } from '../actions/blogActions'
import { useDispatch, useSelector } from 'react-redux' 

const WriteScreen = ({history}) => {

    const [title,setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [readingTime, setReadingTime] = useState('')
    const [genre, setGenre] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createBlog(title, article, readingTime, genre))
    }

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            return null
        }
    },[history, userInfo])

    return (
        <FormContainer>
            <h3 className="mt-4">Create a Blog</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="article">
                    <Form.Label>Blog</Form.Label>
                    <Form.Control as="textarea" type="article" placeholder="Tell us something" value={article} onChange={(e) => setArticle(e.target.value)} style={{height: '200px'}}>
                    </Form.Control>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="readingTime">
                        <Form.Label>Reading Time</Form.Label>
                        <Form.Control type="title" placeholder="ex : 4" value={readingTime} onChange={(e) => setReadingTime(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="title" placeholder="genre" value={genre} onChange={(e) => setGenre(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Button type="submit">Submit</Button>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default WriteScreen
