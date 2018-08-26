import { styled } from "reakit";
import React from "react";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NotepadButton from "./NotepadButton";
import ValueContainer from "../Containers/ValueContainer";

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

const ToggleButton = props => (
  <ValueContainer initialState={{ value: true }} {...props}>
    {({ value, set }) => (
      <Togglable
        onClick={() => set(state => ({ value: !state.value }))}
        {...props}
      >
        {value ? <TiArrowMaximise /> : <TiArrowMinimise />}
      </Togglable>
    )}
  </ValueContainer>
);

export default ToggleButton;
