import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

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
        <PostList posts={posts} />
    </>)
}

export default App;