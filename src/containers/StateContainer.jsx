import { Container } from "reakit";
import React from "react";

const actions = {
  set: func => state => {
    if (typeof func === "function") return func(state);
    return func;
  }
};

const StateContainer = props => <Container actions={actions} {...props} />;

export default StateContainer;
