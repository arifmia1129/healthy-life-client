import moment from 'moment/moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import detailsFetchingBlog from '../../redux/thunk/detailsFetchingBlog';

const Blog = ({ blog }) => {
    const { _id, image, title, description, author, publishedDate, category } = blog;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div class="hero my-5">
            <div class="hero-content flex-col lg:flex-row justify-between">
                <img src={image} class="w-[100vw] rounded-lg md:w-[30vw]" alt='' />
                <div className='md:w-[70vw]'>
                    <p className='font-bold text-red-700'>{category.toUpperCase()}</p>
                    <p className='text-gray-500'>{moment(publishedDate).format("MMMM Do YYYY")}</p>
                    <h1 class="text-2xl font-bold">{title}</h1>
                    <p class="py-6">{description.slice(0, 100)}</p>
                    <button onClick={() => navigate(`/details/${_id}`)} class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;