import { useEffect, useState } from "react";

function Hello() {
  const byFn = () => {
    console.log("bye :(");
  };
  const hiFn = () => {
    console.log("created :)");
    return byFn;
  };
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
