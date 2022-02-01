import React from "react";
import ReactDom from "react-dom";

import App from './App';

function ReactSocialMedia() {
    return (
        <>
            <App />
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<ReactSocialMedia />, rootNode);