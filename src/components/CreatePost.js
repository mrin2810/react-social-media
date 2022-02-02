import React from "react";

function CreatePost() {
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <div>
                <h1>Create New Post</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Add Post Content"
                    />
                    <input
                        type="file"
                    />
                    <button type="submit">Submit Post</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost;