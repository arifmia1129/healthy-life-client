import { loadBlog } from "../actionCreators/blogAction";

export const fetchingBlog = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://healty-life.onrender.com/api/blog");
        const data = await res.json();
        if (data.success) {
            dispatch(loadBlog(data.blog))
        }
    }
}