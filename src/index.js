import { cleanup } from "@testing-library/react";
import React, { useState } from "react";
import ReactDom from "react-dom";
import { useEffect } from "react/cjs/react.development";

function App() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    function handleMouseMove(event) {
        setMousePosition({
            x: event.pageX,
            y: event.pageY,
        });
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <p>x-coordinate: {mousePosition.x}</p>
            <p>y-coordinate: {mousePosition.y}</p>
        </div>
    )
}

function NewApp() {
    return <div></div>
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);

setTimeout(() => {
    ReactDom.render(<NewApp />, rootNode);
}, 3000)