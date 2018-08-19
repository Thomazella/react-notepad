import React from "react";
import { Provider } from "reakit";
import Notepad from "./Containers/Notepad";

const App = (
  <Provider>
    <Notepad />
  </Provider>
);

export default App;
