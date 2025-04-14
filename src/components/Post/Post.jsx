import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    // console.log(post);
    const {title, id} = post;
    return (
        <div className='p-4 text-2xl text-center border mx-20 rounded-sm mb-4'>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button className="btn">Show details</button>
            </Link>
        </div>
    );
};

export default Post;