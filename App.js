const reactElement = React.createElement('h1', {id: "heading", xyz: "xyz"}, "Hello World from React!!! Fuck the React.");

console.log(reactElement); // this will return an object, not the HTML tag

const reactDOMRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDOMRoot.render(reactElement)