import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchingBlog } from '../../redux/thunk/fetchingBlog';

const Blogs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchingBlog());
    }, [dispatch])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Blogs;