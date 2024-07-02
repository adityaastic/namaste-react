import React from "react";
import ReactDOM from "react-dom/client";


// JSX (transpiled before it reaches the JS) - PARCEL-Babel

// JSX => Babel transpliles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
