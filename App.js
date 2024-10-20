import React from "react";
import ReactDOM from "react-dom/client"

const headingJSX = (<div><h1 id="heading" tabIndex='5'>Heading using JSX!! Fuck the React!!!</h1></div>);

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(headingJSX)