import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const { email, name, id, phone } = friend;
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Everythingd about this person is Here</h3>
            <h2>Name: {friend.name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={handleGoBack}>GO back</button>

        </div>
    )
}

export default FriendDetails