import Chai from "./Chai.jsx";

function App() {
  const username = "ShubhamKumar";
  return (
    <>
      <Chai />
      <h1>Chai Aur React | {username} </h1>
    </>
  );
}

export default App;

// we can only return one element
// <> </> is called fragment in react (same as a div)
// it is used to combine multiple elements into one element and return as single element
// in vite, the component file name (like, App, Chai) must start with a capital letter
// also the function name must also start with capital letter
// also component file name must be .jsx not .js
// otherwise error

// {username} is an evaluated expression (not js)
