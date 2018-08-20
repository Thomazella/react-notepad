import React from "react";
import { Provider } from "reakit";
import Notepad from "./Components/Notepad";

const App = (
  <Provider>
    <Notepad />
  </Provider>
);

export default App;
