import { LOAD_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes";

const initialBlogState = {
    blog: [],
    sortBy: "first"
}

const blogReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                blog: action.payload
            }
        case SORT_TOGGLE:
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}


export default blogReducer;