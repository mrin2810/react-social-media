import React, { useContext } from "react";
import { UserContext } from '../App';

function Post({ image, content, user }) {
    const currUser = useContext(UserContext);
    const isCurrentUser = currUser === user;
    return (
    <>
        {image && <img 
            src={URL.createObjectURL(image)} 
            style={{ height: 100, width: 200, objectFit: 'cover'}} 
            alt='Post Cover'
        />}
        {content && <p>{content}</p>}
        <div style={{ color : isCurrentUser && 'green'}}>{user}</div>
    </>)
}

export default Post;