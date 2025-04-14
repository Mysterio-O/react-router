import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserInfo = () => {
    const userData = useLoaderData();
    const {name, website} = userData;
    const navigate = useNavigate();
    return (
        <div>
            <h3>{name}</h3>
            <p>{website}</p>
            <button onClick={() => navigate(-1)} className="btn">Back</button>
        </div>
    );
};

export default UserInfo;