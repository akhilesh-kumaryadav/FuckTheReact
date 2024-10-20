import React from "react";
import ReactDOM from "react-dom/client"

const headingJSX = <h1 id="heading">Heading using JSX!! Fuck the React!!!</h1>

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(headingJSX)