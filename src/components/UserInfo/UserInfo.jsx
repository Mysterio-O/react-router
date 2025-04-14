import React from 'react';
import { useLoaderData } from 'react-router';

const UserInfo = () => {
    const userData = useLoaderData();
    const {name, website} = userData;
    return (
        <div>
            <h3>{name}</h3>
            <p>{website}</p>
        </div>
    );
};

export default UserInfo;