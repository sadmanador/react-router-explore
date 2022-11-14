import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData()
    const {name, email, username, company, phone, website} = userDetails;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><small>User: {username}</small></p>
            <h4>{phone}</h4>
            <p>{company.name}</p>
            <h6>{website}</h6>

        </div>
    );
};

export default UserDetails;