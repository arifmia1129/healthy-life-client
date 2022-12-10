import { DETAILS_BLOG, HISTORY_BLOG, LOAD_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes"

export const loadBlog = (blog) => {
    return {
        type: LOAD_BLOG,
        payload: blog
    }
}

export const sortToggle = (data) => {
    return {
        type: SORT_TOGGLE,
        payload: data
    }
}

export const loadBlogDetails = (data) => {
    return {
        type: DETAILS_BLOG,
        payload: data
    }
}
export const addBlogToHistory = (data) => {
    return {
        type: HISTORY_BLOG,
        payload: data
    }
}