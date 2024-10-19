const reactElement = React.createElement('h1', { id: "heading", xyz: "xyz" }, "Hello World from React!!! Fuck the React.");

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

console.log(reactElement); // this will return an object, not the HTML tag

const reactDOMRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactDOMRoot.render(parent)
reactDOMRoot.render(parent, reactElement) //
