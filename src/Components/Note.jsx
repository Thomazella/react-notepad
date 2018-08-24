import { styled, Flex } from "reakit";
import React, { Fragment } from "react";
import { onlyEmoji } from "emoji-aware";
import { MdClose } from "react-icons/md";
import NotepadButton from "./NotepadButton";
import BaseNote from "./BaseNote";

const NoteBody = styled(BaseNote)`
  border: 1px solid #b2b2c9;
  padding: 5px 20px;
  border-radius: 20px;
  color: #011688;
`;

const ErrorMsg = BaseNote;

const DeleteButton = styled(NotepadButton)`
  color: #7c7c93;
  background-color: #f5f5fc;
  width: 1.5em;
  height: 1.5em;
  transform: scale(1);
  svg {
    width: 1em;
    height: 1em;
  }
`;

const ErrorWrapper = styled(NoteBody)`
  flex-direction: column;
  position: relative;
  top: -0.9em;
  color: #ffffff;
  background-color: #ff5555;
`;

const validate = (validator, string) => validator(string);
const lengthNotZero = string => string && string.length !== 0;
const lengthUnder100 = string => string && string.length <= 100;
const noEmojiChars = string => string && onlyEmoji(String(string)).length === 0;

const Note = ({ children: noteText, deleteNote, index, ...props }) => {
  const meaningful = validate(lengthNotZero, noteText);
  const short = validate(lengthUnder100, noteText);
  const emojiFree = validate(noEmojiChars, noteText);
  const ok = meaningful && short && emojiFree;

  return (
    <Fragment>
      <Flex marginBottom="1em" {...props}>
        <NoteBody>
          <span>{noteText}</span>
          <DeleteButton onClick={() => deleteNote(index)}>
            <MdClose />
          </DeleteButton>
        </NoteBody>
      </Flex>
      {!ok && (
        <ErrorWrapper>
          {!short && (
            <ErrorMsg>Note shouldn&#39;t exceed 100 characters</ErrorMsg>
          )}
          {!meaningful && <ErrorMsg>Note shouldn&#39;t be empty</ErrorMsg>}
          {!emojiFree && <ErrorMsg>Note shouldn&#39;t contain emoji</ErrorMsg>}
        </ErrorWrapper>
      )}
    </Fragment>
  );
};

export default Note;
