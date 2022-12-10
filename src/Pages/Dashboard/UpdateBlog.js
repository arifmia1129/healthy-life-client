import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import detailsFetchingBlog from '../../redux/thunk/detailsFetchingBlog';

const UpdateBlog = () => {
    const details = useSelector(state => state.blogDetails);

    const { id } = useParams();

    const dispatch = useDispatch();

    const { image, author, category, description, title, _id } = details;

    useEffect(() => {
        dispatch(detailsFetchingBlog(id))
    }, [dispatch, id])

    const handleEditBlog = async (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const author = event.target.author.value;

        const res = await fetch(`https://healty-life.onrender.com/api/blog/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                image,
                title,
                description,
                category,
                author
            })
        })

        const data = await res.json();

        console.log(data);

        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }
    return (
        <div>
            <div className='p-2'>
                <form onSubmit={handleEditBlog}>
                    <div className='md:grid grid-cols-2'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Image link</span>
                            </label>
                            <input defaultValue={image} name='image' type="text" placeholder="Image link" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Title</span>
                            </label>
                            <input defaultValue={title} name='title' type="text" placeholder="Title" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='md:grid grid-cols-2'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Blog Description</span>
                            </label>
                            <textarea defaultValue={description} name='description' class="textarea textarea-bordered h-24" placeholder="Blog description"></textarea>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Category</span>
                            </label>
                            <select value={category} name='category' class="select select-bordered">
                                <option value="default" disabled selected>Pick category</option>
                                <option value="pain">Pain</option>
                                <option value="mind & mood">Mind & Mood</option>
                                <option value="men's health">Men's Health</option>
                                <option value="women's health">Women's Health</option>
                                <option value="diseases">Diseases</option>
                                <option value="heart health">Heart Health</option>
                                <option value="general">General</option>
                                <option value="nutrition">Nutrition</option>
                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Author Name</span>
                            </label>
                            <input defaultValue={author} name='author' type="text" placeholder="Author" class="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <button className='mt-5 btn btn-primary' type="submit">Add Blog</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;