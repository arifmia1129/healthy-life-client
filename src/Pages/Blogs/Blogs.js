import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingBlog } from '../../redux/thunk/fetchingBlog';
import Blog from './Blog';

const Blogs = () => {

    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blog);
    console.log(blogs)
    useEffect(() => {
        dispatch(fetchingBlog());
    }, [dispatch])
    return (
        <div>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                />)
            }
        </div>
    );
};

export default Blogs;