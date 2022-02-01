import React, { useState } from "react";
import ReactDom from "react-dom";
import { useEffect } from "react/cjs/react.development";

function App() {
    const [developer, setDeveloper] = useState({
        name: "",
        lang: 'python',
        yoe: 0,
        isEmployed: false
    });

    useEffect(() => {
        document.title = developer.name !== "" ? developer.name : "User";
    }, [developer.name]);

    return (
        <>
            <div><button onClick={() => {
                setDeveloper({
                    ...developer,
                    isEmployed: !developer.isEmployed,
                })
            }}>Toggle Employment</button></div>
            <div>
                <button onClick={() => setDeveloper({
                    lang: 'JS',
                    yoe: 2
                })}>Change Language</button>
            </div>
            <p>
                Name: <input
                    type="text"
                    onChange={(event) => setDeveloper({
                        ...developer,
                        name: event.target.value
                    })}
                />
            </p>
            <p>
                Years of Experience: <input
                    type="number"
                    onChange={(event) => setDeveloper({
                        ...developer,
                        yoe: event.target.value
                    })}
                />
            </p>
            {developer.name !== "" && <p>Hello! {developer.name} here.</p>}
            <p>I am learning {developer.lang}.</p>
            <p>I have {developer.yoe} years of Experience. </p>
            <p>I am {!developer.isEmployed && <b>{'not '}</b>}<b>employed</b> currently. </p>
        </>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);