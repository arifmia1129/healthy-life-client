import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';

const List = ({ blog }) => {
    const { title, author } = blog;

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>
                <button className='mx-2'><FiEdit /></button>
                <button className='mx-2'><AiFillDelete /></button>
            </td>
        </tr>
    );
};

export default List;