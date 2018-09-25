/* eslint-disable no-underscore-dangle */
import { compose } from "redux";

export const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const devtoolsCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default devtools;
