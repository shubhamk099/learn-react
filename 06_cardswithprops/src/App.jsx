import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/Card";
import TopHeading from "./assets/components/TopHeading";

function App() {
  const [count, setCount] = useState(0);

  const firstCard = {
    img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D",
    text: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript, a programming language.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  };

  const secondCard = {
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3NzfGVufDB8fDB8fHww",
    text: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  };

  const thirdCard = {
    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
    text: "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. Ninety-nine percent of websites use JavaScript on the client side for webpage behavior.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  };

  return (
    <>
      <TopHeading />
      <div className="flex space-x-6">
        <Card cardData={firstCard} />
        <Card cardData={secondCard} />
        <Card cardData={thirdCard} />
      </div>
    </>
  );
}

export default App;
