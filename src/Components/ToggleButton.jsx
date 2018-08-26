import { styled, Container } from "reakit";
import React from "react";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NotepadButton from "./NotepadButton";

const Togglable = styled(NotepadButton)`
  color: white;
  background-color: #333333;
  width: 3.6em;
  height: 3.6em;
  border-style: none;
  z-index: 110;
  &:before {
    background: #333333;
    border-color: #333333;
  }
  &:hover,
  &:active,
  &:focus {
    border-style: none;
    color: white;
  }
  &:active:before,
  &:focus:before,
  &:hover:before {
    background: #333333;
  }
`;

const actions = {
  toggle: () => state => ({ closed: !state.closed })
};

const ToggleButton = props => (
  <Container initialState={{ closed: true }} actions={actions} {...props}>
    {({ closed, toggle }) => (
      <Togglable onClick={() => toggle()} {...props}>
        {closed ? <TiArrowMaximise /> : <TiArrowMinimise />}
      </Togglable>
    )}
  </Container>
);

export default ToggleButton;
