import React, { use } from 'react';

const UserDetails = ({userPromise}) => {
    const user = use(userPromise);
    // console.log(user);
    const {name, username} = user;
    return (
        <div>
            <p>Username: {username}</p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails;