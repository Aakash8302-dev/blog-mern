import { BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL, BLOG_CREATE_REQUEST, BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_GET_REQUEST, BLOG_GET_FAIL, BLOG_GET_SUCCESS } from '../constants/blogConstants'
import axios from 'axios'

export const listBlogs = () => async (dispatch) => {
    try {
        dispatch({type: BLOG_LIST_REQUEST})

        const {data} = await axios.get('/api/blogs/')

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const getBlogById = (id) => async (dispatch) => {
    try {
        dispatch({type: BLOG_GET_REQUEST})

        const {data} = await axios.get(`/api/blogs/${id}`)

        dispatch({
            type: BLOG_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const createBlog = (title, article, readingTime, genre) => async(dispatch, getState) => {

    try{
        dispatch({type: BLOG_CREATE_REQUEST})

        const {userLogin:{userInfo}} = getState()
        

        const config = { 
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/blogs/create', {title, article, readingTime, genre}, config)
        
        dispatch({
            type: BLOG_CREATE_SUCCESS,
            payload: data
        })


    }catch(error){

        dispatch({
            type: BLOG_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}