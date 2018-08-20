import React from "react";
import { styled, Container, Flex, Input } from "reakit";
import { TiArrowRightThick } from "react-icons/ti";
import NotepadButton from "./NotepadButton";

const WrapperInput = styled(Flex)`
  position: absolute;
  align-items: center;
  margin-bottom: 0.5em;
  bottom: 0;
`;

const SubmitButton = styled(NotepadButton)`
  color: white;
  background-color: #9e3be5;
  transform: scale(0.7);
`;

const actions = {
  updateText: newText => () => ({ text: newText })
};

const NewNote = props => {
  const { addNote } = props;
  return (
    <Container initialState={{ text: "" }} actions={actions} {...props}>
      {({ text, updateText }) => (
        <WrapperInput>
          <Input
            value={text}
            placeholder="Add a note"
            outlineColor="#9e3be5"
            onChange={event => updateText(event.target.value)}
          />
          <SubmitButton onClick={() => addNote(text)}>
            <TiArrowRightThick />
          </SubmitButton>
        </WrapperInput>
      )}
    </Container>
  );
};

export default NewNote;
