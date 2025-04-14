import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;