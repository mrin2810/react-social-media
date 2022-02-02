import React, { useState } from "react";

function Login({setUser}) {
    const [username, setUsername] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setUser(username);
    }

    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <p><input
                type="text"
                placeholder="Input Username"
                onChange={event => setUsername(event.target.value)}
            /></p>
            <p><input
                type="password"
                placeholder="Input Password"
            /></p>
            <button type="Submit">Submit</button>
        </form>
    </div>);
}

export default Login;