import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({ user }) => {
    const { name, id, email, username } = user;
    return (
        <div className='user-card'>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>User: <Link to={`/user/${id}`}>{username}</Link></p>
        </div>
    );
};

export default User;