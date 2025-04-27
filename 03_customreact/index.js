function customRender(reactElement, mainContainer) {
  // Version - 1
  //   const element = document.createElement(reactElement.type);
  //   element.innerHTML = reactElement.children;
  //   element.setAttribute("href", reactElement.props.href);
  //   element.setAttribute("target", reactElement.props.target);
  //   mainContainer.appendChild(element);
  // Version - 2
  const element = document.createElement(reactElement.type);
  const content = document.createTextNode(reactElement.children);
  element.appendChild(content);

  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    element.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "clickme to go to google.com",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
