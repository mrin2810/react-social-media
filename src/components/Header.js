import React from "react";

function Header({ user, setUser }) {
    return (
        <>
            <h2>Welcome {user}!</h2>
            <button onClick={() => setUser('')}>Logout</button>
        </>
    );
}

export default Header;