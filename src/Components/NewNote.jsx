import React from "react";
import { styled, Container, Flex, Input } from "reakit";
import { MdArrowForward } from "react-icons/md";
import NotepadButton from "./NotepadButton";

const WrapperInput = styled(Flex)`
  position: absolute;
  align-items: center;
  bottom: 0.5em;
  color: #011688;
  width: 94%;
  background-color: white;
  padding: 0.5em 0.6em 0em 0em;
  @media (min-width: 756px) {
    width: 87%;
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
  margin: 0.5em 0.6em 0.6em 0.8em;
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

const actions = {
  updateText: newText => () => ({ text: newText })
};

const empty = "";

const NewNote = ({ addNote }, ...props) => (
  <Container initialState={{ text: "" }} actions={actions} {...props}>
    {({ text, updateText }) => (
      <WrapperInput>
        <TextInput
          value={text}
          placeholder="Add a note"
          onChange={event => updateText(event.target.value)}
          onKeyDown={({ key }) => key === "Enter" && addNote(text)}
        />
        <SubmitButton
          onClick={() => {
            addNote(text);
            updateText(empty);
          }}
        >
          <MdArrowForward />
        </SubmitButton>
      </WrapperInput>
    )}
  </Container>
);

export default NewNote;
