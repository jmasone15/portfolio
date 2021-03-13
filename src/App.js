import React, { useState } from "react";
import MovingBackground from "./components/MovingBackground";
import Router from "./Router";

function App() {

  const [theme, setTheme] = useState(true);
  const [background, setBackground] = useState("ball");

  return (
    <>
      <MovingBackground theme={theme} background={background} />
      <Router theme={theme} setTheme={setTheme} setBackground={setBackground} />
    </>
  );
}

export default App;
