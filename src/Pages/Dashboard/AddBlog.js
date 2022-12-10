import axios from 'axios';
import { success } from 'daisyui/src/colors';
import React from 'react';
import { toast } from 'react-toastify';

const AddBlog = () => {

    const handleAddBlog = async (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const title = event.target.title.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const author = event.target.author.value;

        const res = await fetch("https://healty-life.onrender.com/api/blog", {
            method: "POST",
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


        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }

        event.target.image.value = ""
        event.target.title.value = ""
        event.target.description.value = ""
        event.target.category.value = ""
        event.target.author.value = ""
    }

    return (
        <div className='p-2'>
            <form onSubmit={handleAddBlog}>
                <div className='md:grid grid-cols-2'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Image link</span>
                        </label>
                        <input name='image' type="text" placeholder="Image link" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Title</span>
                        </label>
                        <input name='title' type="text" placeholder="Title" class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='md:grid grid-cols-2'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Blog Description</span>
                        </label>
                        <textarea name='description' class="textarea textarea-bordered h-24" placeholder="Blog description"></textarea>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Category</span>
                        </label>
                        <select name='category' class="select select-bordered">
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
                        <input name='author' type="text" placeholder="Author" class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <button className='mt-5 btn btn-primary' type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;