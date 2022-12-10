import moment from 'moment/moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlogToHistory, addTag } from '../../redux/actionCreators/blogAction';
import detailsFetchingBlog from '../../redux/thunk/detailsFetchingBlog';

const Blog = ({ blog }) => {
    const { _id, image, title, description, publishedDate, category, tags } = blog;

    const tagName = useSelector(state => state.tag);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const activeBtn = 'btn w-32 btn-primary mx-2 m-2';
    const inActiveBtn = 'btn w-32 mx-2 bg-white text-black m-2';

    return (
        <div class="hero my-5">
            <div class="hero-content flex-col lg:flex-row justify-between">
                <img src={image} class="w-[100vw] rounded-lg md:w-[30vw]" alt='' />
                <div className='md:w-[70vw]'>
                    <p className='font-bold text-red-700'>{category.toUpperCase()}</p>
                    <p className='text-gray-500'>{moment(publishedDate).format("MMMM Do YYYY")}</p>
                    <h1 class="text-2xl font-bold">{title}</h1>
                    <p class="py-6">{description.slice(0, 100)}</p>
                    <div className='mb-5'>
                        {
                            tags?.map((tag, index) => <button onClick={() => dispatch(addTag(tag))} className={`${(tagName === tag) ? activeBtn : inActiveBtn}`} key={index}>{tag}</button>)
                        }
                    </div>
                    <button onClick={() => {
                        navigate(`/details/${_id}`);
                        dispatch(addBlogToHistory(blog));
                    }} class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;