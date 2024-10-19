const reactElement = React.createElement('h1', {id: "heading", xyz: "xyz"}, "Hello World from React!!! Fuck the React.");

const reactDOMRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDOMRoot.render(reactElement)