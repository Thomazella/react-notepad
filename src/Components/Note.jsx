import { styled, InlineFlex, Block } from "reakit";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import NotepadButton from "./NotepadButton";

const NoteBody = styled(InlineFlex)`
  border-bottom: 2px solid black;
  justify-content: space-between;
  width: 100%;
  line-height: 2;
`;

const DeleteNote = styled(NotepadButton)`
  background-color: transparent;
  color: darkred;
  height: 2.25em;
`;

const Note = incomingProps => {
  const { children: noteText, deleteNote, index, ...props } = incomingProps;
  return (
    <Block marginBottom="1em">
      <NoteBody {...props}>
        {noteText}
        <DeleteNote onClick={() => deleteNote(index)}>
          <IoIosCloseCircle />
        </DeleteNote>
      </NoteBody>
    </Block>
  );
};

export default Note;
