import { Container } from "reakit";
import React from "react";

const actions = {
  set: func => state => {
    if (typeof func === "function") return func(state);
    return func;
  }
};

const ValueContainer = props => (
  <Container initialState={{ value: undefined }} actions={actions} {...props} />
);

export default ValueContainer;
