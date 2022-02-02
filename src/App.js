import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';

    }, [user]);

    if(!user) {
        return <Login setUser={setUser} />
    }
    return (<>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} posts={posts} setPosts={setPosts} />
        {posts && posts.map((post, i) => (
            <React.Fragment key={i}>
                {post.content && <p>{post.content}</p>}
                {post.image && <img 
                    src={URL.createObjectURL(post.image)} 
                    style={{ height: 100, width: 200, objectFit: 'cover'}} 
                    alt='Post Cover'
                />}
            </React.Fragment>
        ))}
    </>)
}

export default App;