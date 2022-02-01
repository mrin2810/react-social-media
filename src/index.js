import React, { useRef } from "react";
import ReactDom from "react-dom";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
    
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('codeartistryio');
    const searchInput = useRef();

    useEffect(() => {
        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function getUser() {
        const baseURL = 'https://api.github.com/users/';
        const response = await fetch(`${baseURL}${username}`);
        const data = await response.json();
        setUser(data);
    }

    function handleClearClick() {
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    return (
        <>
            <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                ref={searchInput}
                placeholder="Input username"
            />
            <button onClick={handleClearClick}>Clear</button>
            <div>
                <p>{user && user.name}</p>
                <p>{user && user.login}</p>
            </div>
            <button
                onClick={getUser}
            >Fetch User from Github</button>
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);