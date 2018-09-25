import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import Header from "./components/Header";
import rootReducer from "./reducers";
import Notepad from "./components/Notepad";

const customLogger = createLogger({ collapsed: true });
export const createHydratedStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, customLogger)
  );
export const store = createHydratedStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Header />
      <Notepad />
    </React.Fragment>
  </Provider>
);

export default <App />;
