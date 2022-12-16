import React from "react";
import { Page } from "./components/page";


function App() {
  const Data = require('./data.json');

  return (
    <Page Data={Data}/>
  );
}

export default App;
