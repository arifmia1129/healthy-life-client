import { LOAD_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes"

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