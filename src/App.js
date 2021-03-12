import React, { useState } from "react";
import MovingBackground from "./components/MovingBackground";
import Router from "./Router";

function App() {

  const [theme, setTheme] = useState(true)

  return (
    <>
      <MovingBackground theme={theme} />
      <Router theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
