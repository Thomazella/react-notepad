import { styled, InlineFlex, Block, Base } from "reakit";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const NoteBody = styled(InlineFlex)`
  border-bottom: 2px solid black;
  justify-content: space-between;
  width: 100%;
  line-height: 2;
`;

const DeleteNote = styled(Base.as("button"))`
  background-color: transparent;
  color: darkred;
  font-size: 1.5em;
  outline-color: darkred;
`;

const Note = incomingProps => {
  const { children: noteText, ...props } = incomingProps;
  return (
    <Block marginBottom="1em">
      <NoteBody {...props}>
        {noteText}
        <DeleteNote>
          <IoIosCloseCircle />
        </DeleteNote>
      </NoteBody>
    </Block>
  );
};

export default Note;
