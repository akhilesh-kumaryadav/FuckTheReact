import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, "Heading 1"), 
        React.createElement('h2', {}, "Heading 2")
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "Heading 1"), 
        React.createElement('h2', {}, "Heading 2")
    ])
])

const reactDOMRoot = ReactDOM.createRoot(document.getElementById("root"));
const reactDOMRoot1 = ReactDOM.createRoot(document.getElementById("root1"))
reactDOMRoot.render(parent) 
reactDOMRoot1.render(parent)

