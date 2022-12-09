import { LOAD_BLOG } from "../actionTypes/blogActionTypes"

export const loadBlog = (blog) => {
    return {
        type: LOAD_BLOG,
        payload: blog
    }
}