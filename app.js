import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElemet(render)
const heading = React.createElement("h1", {}, "This is my Heading");
console.log("heading", heading);

// react element
// JSX (html-like or xml like syntax)
// JSX(transiled before it reached the JS) => parcel(Babel) => React.createElement => object => HTMLElement(render)

const heading2 = (
  <>
    <h2>This is my heading 2 with react element</h2>
  </>
);

const number = 100;
// functional component - 99.99 / latest practice
const HeadingComponent = ()=> {
  return (
    <>
        { heading2 }
        { number /10 }
      <h2>This is my functional component</h2>
      <h3>This is my heading 3</h3>
    </>
  );
};


const AnotherComponent = () => (
  <>
    {/* we are using first */}
    <HeadingComponent /> 
    <HeadingComponent > </HeadingComponent >
    <h1>we are testing this functional componet</h1>
    {HeadingComponent()}
    <h2>This is Another component</h2>
    <h2>This is Another component</h2>
    <h2>This is Another component</h2>
  </>
);


const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AnotherComponent > </AnotherComponent >); // takes object and convert it into html element
