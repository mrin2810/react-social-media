import React from "react";
import ReactDom from "react-dom";
import { useEffect, useState } from "react/cjs/react.development";

const endpoint = 'https://api.github.com/users/mrin2810';
function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const response = await fetch(endpoint);
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, []);

    return (
        <>
            <div>{user && user.name}</div>
            <div>{user && user.html_url}</div>
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);