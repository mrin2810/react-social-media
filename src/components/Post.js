import React from "react";

function Post({ image, content, user }) {
    return (
    <>
        {image && <img 
            src={URL.createObjectURL(image)} 
            style={{ height: 100, width: 200, objectFit: 'cover'}} 
            alt='Post Cover'
        />}
        {content && <p>{content}</p>}
        <div>{user}</div>
    </>)
}

export default Post;