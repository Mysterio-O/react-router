import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const details = useLoaderData();

    const navigate = useNavigate()
    const handleBack = () => navigate(- 1)
    // console.log(details);
    const {title, body} = details;
    return (
        <div className='text-center border mt-20 mx-16'>
            <p>{title}</p>
            <h3 className='text-2xl'>{body}</h3>

            <button onClick={handleBack} className="btn">Back</button>
            
        </div>
    );
};

export default PostDetails;