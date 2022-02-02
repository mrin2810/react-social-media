import React from "react";

function PostList({ posts }) {
    return (
        posts.map((post, i) => (
            <React.Fragment key={i}>
                {post.image && <img 
                    src={URL.createObjectURL(post.image)} 
                    style={{ height: 100, width: 200, objectFit: 'cover'}} 
                    alt='Post Cover'
                />}
                {post.content && <p>{post.content}</p>}
                <div>{post.user}</div>
            </React.Fragment>
        ))
    )
}

export default PostList;