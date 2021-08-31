import {BLOG_LIST_REQUEST, BLOG_LIST_FAIL, BLOG_LIST_SUCCESS, BLOG_CREATE_FAIL, BLOG_CREATE_REQUEST, BLOG_CREATE_SUCCESS, BLOG_GET_REQUEST, BLOG_GET_SUCCESS, BLOG_GET_FAIL} from '../constants/blogConstants'

export const blogListReducer = (state={blogs: []}, action) => {
    switch(action.type){
        case BLOG_LIST_REQUEST:
            return {loading: true, blogs: []}
        case BLOG_LIST_SUCCESS:
            return {loading: false, blogs: action.payload}
        case BLOG_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const blogGetById = (state={blog:{}}, action) => {
    switch(action.type){
        case BLOG_GET_REQUEST:
            return {loading: true, blog: {}}
        case BLOG_GET_SUCCESS:
            return {loading: false, blog: action.payload}
        case BLOG_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const blogCreateReducer = (state={}, action) => {
    switch(action.type){
        case BLOG_CREATE_REQUEST:
            return {loading: true}
        case BLOG_CREATE_SUCCESS:
            return {loading: false, blog: action.payload}
        case BLOG_CREATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}