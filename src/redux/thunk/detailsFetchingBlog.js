import { loadBlogDetails } from "../actionCreators/blogAction";

const detailsFetchingBlog = id => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://healty-life.onrender.com/api/blog/${id}`);
        const data = await res.json();

        if (data.success) {
            dispatch(loadBlogDetails(data.blog));
        }
    }
}

export default detailsFetchingBlog;