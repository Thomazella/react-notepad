import React from "react";
import { styled, Flex, Input } from "reakit";
import { MdArrowForward } from "react-icons/md";
import NoteContainer from "../Containers/NoteContainer";
import ValueContainer from "../Containers/ValueContainer";
import NotepadButton from "./NotepadButton";

const WrapperInput = styled(Flex)`
  position: absolute;
  align-items: center;
  width: 100%;
  bottom: 0.5em;
  color: #011688;
  background-color: white;
  z-index: 20;
  margin-left: -0.8em;
  padding: 0 0.8em;
  @media (min-width: 756px) {
    margin-left: -2em;
    padding: 0 2em;
    bottom: 1.5em;
  }
`;

const TextInput = styled(Input)`
  color: #011688;
  min-height: 2.5em;
  border-radius: 20px;
  outline-style: none;
  line-height: 2.5em;
  z-index: 10;
  overflow: hidden;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  transition-property: color, transform, background-color, border;
  &:hover,
  &:active,
  &:focus {
    background: #ffce0055;
    color: #333;
    border-color: transparent;
  }
`;

const SubmitButton = styled(NotepadButton)`
  height: 2.5em;
  width: 2.5em;
  border: 1px solid #b2b2c9;
  margin: 0.5em 0em 0.6em 0.8em;
  background-color: #ffffff;
  @media (min-width: 756px) {
    margin-left: 1em;
  }
  &:hover,
  &:active,
  &:focus {
    border-style: none;
  }
`;

const NewNote = props => (
  <NoteContainer {...props}>
    {({ addNote }) => (
      <ValueContainer initialState={{ value: "" }} {...props}>
        {({ value, set }) => (
          <WrapperInput>
            <TextInput
              value={value}
              placeholder="Add a note"
              onChange={event => set({ value: event.target.value })}
            />
            <SubmitButton
              onClick={() => {
                addNote(value);
                set({ value: "" });
              }}
            >
              <MdArrowForward />
            </SubmitButton>
          </WrapperInput>
        )}
      </ValueContainer>
    )}
  </NoteContainer>
);

export default NewNote;
