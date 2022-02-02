import React from "react";
import { UserContext } from '../App';

function Post({ image, content, user }) {
    return (
    <UserContext.Consumer>
        {(currUser) => (
            <>
                {image && <img 
                    src={URL.createObjectURL(image)} 
                    style={{ height: 100, width: 200, objectFit: 'cover'}} 
                    alt='Post Cover'
                />}
                {content && <p>{content}</p>}
                <div style={{ color : currUser === user && 'green'}}>{user}</div>
            </>
        )}
    </UserContext.Consumer>)
}

export default Post;