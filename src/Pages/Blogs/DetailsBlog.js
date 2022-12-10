import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import detailsFetchingBlog from '../../redux/thunk/detailsFetchingBlog';

const DetailsBlog = () => {
    const details = useSelector(state => state.blogDetails);

    const { id } = useParams();

    const dispatch = useDispatch();

    const { image, author, category, description, publishedDate, title } = details;

    useEffect(() => {
        dispatch(detailsFetchingBlog(id))
    }, [dispatch, id])
    return (
        <div>
            <p className='text-[#A51C30] font-bold my-5'>{category.toUpperCase()}</p>
            <h3 className='text-4xl font-bold mb-5'>{title}</h3>
            <p>{moment(publishedDate).format("MMMM Do YYYY")}</p>
            <p className='my-5'>By <span className='text-[#A51C30] font-bold'>{author}</span></p>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <p className='mb-10'>{description}{description}{description}{description}{description}{description}{description}{description}{description}{description}{description}{description}</p>
        </div>
    );
};

export default DetailsBlog;