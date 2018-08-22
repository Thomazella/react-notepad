import { styled, Block } from "reakit";
import React, { Fragment } from "react";
import { onlyEmoji } from "emoji-aware";
import { IoIosCloseCircle } from "react-icons/io";
import NotepadButton from "./NotepadButton";
import BaseNote from "./BaseNote";

const NoteBody = styled(BaseNote)`
  border-bottom: 2px solid black;
`;

const ErrorMsg = BaseNote;

const DeleteNote = styled(NotepadButton)`
  background-color: transparent;
  color: darkred;
  height: 2.25em;
`;

const ErrorBlock = styled(Block)`
  margin-bottom: 1em;
  border: 2px dashed darkred;
  border-radius: 8%;
  min-height: 2em;
  padding: 0.25em;
`;

const validate = (validator, string) => validator(string);
const lengthNotZero = string => string && string.length !== 0;
const lengthUnder100 = string => string && string.length <= 100;
const noEmojiChars = string => string && onlyEmoji(String(string)).length === 0;

const Note = incomingProps => {
  const { children: noteText, deleteNote, index, ...props } = incomingProps;
  const meaningful = validate(lengthNotZero, noteText);
  const short = validate(lengthUnder100, noteText);
  const emojiFree = validate(noEmojiChars, noteText);
  const ok = meaningful && short && emojiFree;

  return (
    <Fragment>
      <Block marginBottom="1em">
        <NoteBody {...props}>
          {noteText}
          <DeleteNote onClick={() => deleteNote(index)}>
            <IoIosCloseCircle />
          </DeleteNote>
        </NoteBody>
      </Block>
      {!ok && (
        <ErrorBlock>
          {!short && (
            <ErrorMsg>Note shouldn&#39;t exceed 100 characters</ErrorMsg>
          )}
          {!meaningful && <ErrorMsg>Note shouldn&#39;t be empty</ErrorMsg>}
          {!emojiFree && <ErrorMsg>Note shouldn&#39;t contain emoji</ErrorMsg>}
        </ErrorBlock>
      )}
    </Fragment>
  );
};

export default Note;
