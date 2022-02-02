import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';

    }, [user]);

    if(!user) {
        return <Login setUser={setUser}/>
    }
    return (<>
        <Header user={user} setUser={setUser}/>
        <CreatePost />
    </>)
}

export default App;