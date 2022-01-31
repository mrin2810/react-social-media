import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
    const [developer, setDeveloper] = useState({
        lang: 'python',
        yoe: 0,
    });

    return (
        <>
            <div>
                <button onClick={() => setDeveloper({
                    lang: 'JS',
                    yoe: 2
                })}>Change Language</button>
            </div>
            <p>
                <input
                    type="number"
                    onChange={(event) => setDeveloper({
                        ...developer,
                        yoe: event.target.value
                    })}
                />
            </p>
            <p>I am learning {developer.lang}.</p>
            <p>I have {developer.yoe} years of Experience. </p>
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);