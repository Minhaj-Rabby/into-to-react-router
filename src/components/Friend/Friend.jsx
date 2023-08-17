import React from 'react'
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
   // console.log(friend);
    const { email, name, id, phone } = friend;
    const navigate=useNavigate();
    const handleFriendDeatils=()=>{
        navigate(`/friend/${id}`);
    }

    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
            <button onClick={handleFriendDeatils}>Show Details</button>

        </div>
    )
}

export default Friend