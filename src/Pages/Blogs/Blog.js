import React from 'react';

const Blog = ({ blog }) => {
    const { image, title, description, author, publishedDate, category } = blog;
    return (
        <div class="hero my-5">
            <div class="hero-content flex-col lg:flex-row justify-between">
                <img src={image} class="w-[100vw] rounded-lg md:w-[30vw]" alt='' />
                <div className='md:w-[70vw]'>
                    <p className='font-bold text-red-700'>{category.toUpperCase()}</p>
                    <h1 class="text-2xl font-bold">{title}</h1>
                    <p class="py-6">{description.slice(0, 100)}</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;