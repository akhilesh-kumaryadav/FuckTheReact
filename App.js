import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const headingJSXReactElement = (
  <div>
    <h1 id="heading" tabIndex="5">
      Heading using JSX Component, industry standard code!! Fuck the React!!!
    </h1>
  </div>
);

//React Funcational Componenet
const HeadingJSXComponent = () => (
  <div>
    {100 + 200}
    {headingJSXReactElement}
    <h1 id="heading" tabIndex="5">
      Heading using JSX Functional Component, industry standard code!! Fuck the
      React!!!
    </h1>
  </div>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<HeadingJSXComponent />);
