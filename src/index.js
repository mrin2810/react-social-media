import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {

    const [inputValue, setInputValue] = useState('some text');

    function handleInputChange(event) {
        setInputValue(event.target.value); 
    }

    return (
        <>
            <div>
                <input onChange={handleInputChange}/>
            </div>
            {inputValue}
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);