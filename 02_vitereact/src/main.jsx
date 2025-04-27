import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

function MyApp() {
  return <h3>MyApp function in main.jsx</h3>;
}

// It is not a function, .render() is expecting a function
// for ReactElement, we have written my own render method
// hear, it is not compatible
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "clickme to go to google.com",
};

// It is a javascript object (react element object)
// at the end the render method gets an object,
// with compiled html,
// hear we are giving the object directly
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Go to Google
  </a>
);

// According to the react way, using React.createElement() method
const correctElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

createRoot(document.getElementById("root")).render(correctElement);
