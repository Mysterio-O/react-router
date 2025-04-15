import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails from '../components/UserDetails/UserDetails';

const User = ({user}) => {
    // console.log(user);
    const {name, email, phone, id} = user;
    const style = {
        border: '2px solid black',
        borderRadius: '20px',
        padding: '10px',
        margin: "10px"
        
    }
    const [isClicked, setIsClicked] = useState(false);

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json());

    return (
        <div style={style}>
            <h3 className='text-3xl'>Name: {name}</h3>
            <p className='text-2xl'>Email: {email}</p>
            <p className='text-xl'><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button
            onClick={() => setIsClicked(!isClicked)}
            className="btn">{isClicked ? 'Hide' : 'Show'} User Details</button>
            {
               isClicked && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails userPromise={userPromise}></UserDetails>
                </Suspense>
            }
        </div>
    );
};

export default User;