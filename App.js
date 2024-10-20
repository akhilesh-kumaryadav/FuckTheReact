import React from "react";
import ReactDOM from "react-dom/client";

//React Component
const headingJSX = (
  <div>
    <h1 id="heading" tabIndex="5">
      Heading using JSX Component, industry standard code!! Fuck the React!!!
    </h1>
  </div>
);

//React Funcational Componenet
const HeadingJSXComponent = () => (
  <div>
    <h1 id="heading" tabIndex="5">
      Heading using JSX Component, industry standard code!! Fuck the React!!!
    </h1>
  </div>
);

const HeadingJSXComponent2 = () => {
  return (
    <div>
      <h1 id="heading" tabIndex="5">
        Heading using JSX, more explaible code!! Fuck the React!!!
      </h1>
    </div>
  );
};

const HeadingJSXComponent3 = () => <h1>Heading in single line</h1>;

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<HeadingJSXComponent />);
