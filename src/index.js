import React from "react";
import ReactDom from "react-dom";

function App() {
    return (
        <>
            <div>App</div>
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);