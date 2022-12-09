import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortToggle } from '../../redux/actionCreators/blogAction';
import { fetchingBlog } from '../../redux/thunk/fetchingBlog';
import Blog from './Blog';

const Blogs = () => {

    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blog);
    const sortBy = useSelector(state => state.sortBy);

    useEffect(() => {
        dispatch(fetchingBlog());
    }, [dispatch])

    let content;

    if (sortBy === "first") {
        content = blogs.sort((a, b) => (new Date(a.publishedDate) > new Date(b.publishedDate) ? 1 : -1)).map(blog => <Blog
            key={blog._id}
            blog={blog}
        />)
    }
    if (sortBy === "last") {
        content = blogs.sort((a, b) => (new Date(a.publishedDate) > new Date(b.publishedDate) ? -1 : 1)).map(blog => <Blog
            key={blog._id}
            blog={blog}
        />)
    }

    const activeBtn = 'btn w-56 btn-primary mx-2 m-2';
    const inActiveBtn = 'btn w-56 mx-2 bg-white text-black m-2';

    return (
        <div>
            <div className='flex justify-center'>
                <div className='md:grid grid-cols-2'>
                    <button onClick={() => dispatch(sortToggle("first"))} className={`${sortBy === "first" ? activeBtn : inActiveBtn}`}>Sort By First Upload</button>
                    <button onClick={() => dispatch(sortToggle("last"))} className={`${sortBy === "last" ? activeBtn : inActiveBtn}`}>Sort By Last Upload</button>
                </div>
            </div>
            {content}
        </div>
    );
};

export default Blogs;