import React from "react";
import ReactDom from "react-dom";

function App() {
    function handleInputChange(event) {
        const inputValue = event.target.value; 
        console.log(inputValue);
    }

    return (
        <div>
            <input onChange={handleInputChange}/>
        </div>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);