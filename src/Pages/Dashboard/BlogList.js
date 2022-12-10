import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingBlog } from '../../redux/thunk/fetchingBlog';
import List from './List';

const BlogList = () => {
    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blog);

    useEffect(() => {
        dispatch(fetchingBlog());
    }, [dispatch])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs?.map(blog => <List key={blog._id} blog={blog} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogList;