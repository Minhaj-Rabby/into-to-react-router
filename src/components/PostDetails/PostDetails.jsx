import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const{id,title,body}=post;
    const navigate=useNavigate()

    const handleGoBack=()=>{
        navigate(-1);
    }

    return (
        <div>
            <h5>Id: {id}</h5>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    )
}

export default PostDetails