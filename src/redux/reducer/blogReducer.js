import { LOAD_BLOG } from "../actionTypes/blogActionTypes";

const initialBlogState = {
    blog: []
}

const blogReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                blog: action.payload
            }
        default:
            return state
    }
}


export default blogReducer;