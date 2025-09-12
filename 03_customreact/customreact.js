function customRender(element, container) {
  const domElement = document.createElement(element.type);
  const content = document.createTextNode(element.children);
  domElement.appendChild(content);

  for (const key in element.props) {
    if (key === "children") continue;
    domElement.setAttribute(key, element.props[key]);
  }

  container.appendChild(domElement);
}

const customElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to go to Google!",
};

const customContainer = document.getElementById("root");
const mybtn = document.getElementById("clickme");

mybtn.addEventListener("click", () =>
  customRender(customElement, customContainer)
);