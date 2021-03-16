import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import configs from "./components/data/backgroundConfig";
import Router from "./Router";

function App() {

  const [theme, setTheme] = useState(true);
  const [config, setConfig] = useState(configs.defaultConfig);

  return (
    <div>
      <Wrapper config={config} setConfig={setConfig} theme={theme} />
      <Router theme={theme} setTheme={setTheme} setConfig={setConfig} />
    </div>
  );
}

export default App;