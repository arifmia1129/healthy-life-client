import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeBlog } from '../../redux/actionCreators/blogAction';
import { useNavigate } from 'react-router-dom';

const List = ({ blog }) => {
    const { title, author, _id } = blog;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleDeleteBlog = async () => {
        const res = await fetch(`https://healty-life.onrender.com/api/blog/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })

        const data = await res.json();


        if (data.success) {
            dispatch(removeBlog(_id));
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>
                <button onClick={() => navigate(`/dashboard/edit/${_id}`)} className='mx-2'><FiEdit /></button>
                <button onClick={handleDeleteBlog} className='mx-2'><AiFillDelete /></button>
            </td>
        </tr>
    );
};

export default List;