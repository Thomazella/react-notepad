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
  &:focus {
    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled(NotepadButton)`
  height: 2.5em;
  width: 2.5em;
  border: 1px solid #b2b2c9;
  margin-left: 0.5em 0.6em 0.6em 0.8em;
  background-color: #ffffff;
  @media (min-width: 756px) {
    margin-left: 1em;
  }
`;

const actions = {
  updateText: newText => () => ({ text: newText })
};

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
        <SubmitButton onClick={() => addNote(text)}>
          <MdArrowForward />
        </SubmitButton>
      </WrapperInput>
    )}
  </Container>
);

export default NewNote;
