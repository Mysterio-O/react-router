import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    console.log(user);
    const {name, email, phone, id} = user;
    const style = {
        border: '2px solid black',
        borderRadius: '20px',
        padding: '10px',
        margin: "10px"

    }

    return (
        <div style={style}>
            <h3 className='text-3xl'>Name: {name}</h3>
            <p className='text-2xl'>Email: {email}</p>
            <p className='text-xl'><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;