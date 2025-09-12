import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

function MyApp() {
  return <h3>MyApp function in main.jsx</h3>;
}

/**
 * It is not a function, .render() is expecting a function
 * for ReactElement, earlier we have written my own render method, it is not compatible hear.
 */

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "clickme to go to google.com",
};

/**
 * This will work with .render() method, beacuse hear we are directly giving the html elememt.
 */
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Go to Google
  </a>
);

/**
 * According to the react way, using React.createElement() method.
 */
const username = "shubhamkkumar";
const correctElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  username
);

createRoot(document.getElementById("root")).render(correctElement);

/**
 * In .render() method we can call MyApp() as function, and it will work.
 */
