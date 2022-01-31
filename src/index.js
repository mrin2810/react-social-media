import React from "react";
import ReactDom from "react-dom";

function Person(props) {
    function handlePersonClick() {
        alert(props.person);
    }
    
    return <li onClick={handlePersonClick}>{props.person}</li>
}

function App() {
    const people = ["Jack", "Judy", "Monica", "Ross"];

    function handleInputChange(event) {
        const inputValue = event.target.value; 
        console.log(inputValue);
    }

    return (
        <ul>
            {people.map((person, i) => <Person person={person} key={i} />)}
            <input onChange={handleInputChange}/>
        </ul>
    )
}

const rootNode = document.getElementById("root");
ReactDom.render(<App />, rootNode);