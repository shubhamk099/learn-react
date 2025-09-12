/**
 * Now that we’ve declared Chai, we can nest it into another component.
 * React component names must always start with a capital letter, while HTML tags must be lowercase.
 * The export default keywords specify the main component in the file.
 */

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

/**
 * The markup syntax you’ve seen above is called JSX.
 * It is optional, but most React projects use JSX for its convenience.
 * JSX is stricter than HTML. You have to close tags like <br />.
 * Component also can’t return multiple JSX tags.
 * You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper.
 */

/**
 * JSX lets you put markup into JavaScript. Curly braces let you “escape back” into
 * JavaScript so that you can embed some variable from your code and display it to the user.
 * {username} = Evaluated Expression
 */
