import { DETAILS_BLOG, HISTORY_BLOG, LOAD_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes";

const initialBlogState = {
    blog: [],
    sortBy: "first",
    blogDetails: {},
    blogHistory: []
}

const blogReducer = (state = initialBlogState, action) => {
    const blog = state.blogHistory.find(b => b._id === action.payload._id);
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
        case DETAILS_BLOG:
            return {
                ...state,
                blogDetails: action.payload
            }
        case HISTORY_BLOG:
            if (!blog) {
                return {
                    ...state,
                    blogHistory: [...state.blogHistory, action.payload]
                }
            }
            return {
                ...state
            }
        default:
            return state
    }
}


export default blogReducer;