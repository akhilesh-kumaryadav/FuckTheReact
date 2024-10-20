import React from "react";
import ReactDOM from "react-dom/client";

//React Component
const HeadingJSX = () => (
  <div>
    <h1 id="heading" tabIndex="5">
      Heading using JSX Component, industry standard code!! Fuck the React!!!
    </h1>
  </div>
);

//React Funcational Componenet
const JSXComponent = () => (
  <div>
    <HeadingJSX />
    <h1 id="heading" tabIndex="5">
      Heading using JSX Functional Component, industry standard code!! Fuck the
      React!!!
    </h1>
  </div>
);

const JSXComponent2 = () => {
  return (
    <div>
      <h1 id="heading" tabIndex="5">
        Heading using JSX, more explaible code!! Fuck the React!!!
      </h1>
    </div>
  );
};

const JSXComponent3 = () => <h1>Heading in single line</h1>;

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<JSXComponent />);
