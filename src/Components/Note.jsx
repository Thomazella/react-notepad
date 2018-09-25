import { styled, Flex } from "reakit";
import React, { Fragment } from "react";
import { onlyEmoji } from "emoji-aware";
import { MdClose } from "react-icons/md";
import Button from "../elements/Button";
import Note from "../elements/Note";

const NoteBody = styled(Note)`
  background-color: #f5f5fc;
  color: black;
  padding: 5px 20px;
  &:hover,
  &:active,
  &:focus {
    background: #ffce0055;
  }
`;

const ErrorMsg = styled(Note)`
  padding: 5px 20px;
  &:hover,
  &:active,
  &:focus {
    color: #fcc;
  }
`;

const ErrorWrapper = styled(Note)`
  flex-direction: column;
  position: relative;
  top: -0.9em;
  color: #ffffff;
  background-color: #ff5555;
  border-width: 0;
`;

const DeleteButton = styled(Button)`
  color: #011688;
  background-color: #ffffff;
  width: 1.5em;
  height: 1.5em;
  margin-top: 0.2em;
  margin-left: 1em;
  border-style: none;
  svg {
    width: 1em;
    height: 1em;
  }
  &:hover,
  &:active,
  &:focus {
    border-style: none;
  }
`;

const validate = (string, func) => {
  if (!string) return true;
  return func(string);
};
const lengthNotZero = string => string && string.length !== 0;
const lengthUnder100 = string => string.length <= 100;
const noEmojiChars = string => onlyEmoji(String(string)).length === 0;

const Component = ({ children: noteText, deleteNote, index, ...props }) => {
  const meaningful = lengthNotZero(noteText);
  const short = validate(noteText, lengthUnder100);
  const emojiFree = validate(noteText, noEmojiChars);
  const ok = meaningful && short && emojiFree;

  return (
    <Fragment>
      <Flex marginBottom="1em" {...props}>
        <NoteBody>
          <span>{noteText}</span>
          <Flex alignItems="flex-start" height="100%">
            <DeleteButton onClick={() => deleteNote(index)}>
              <MdClose />
            </DeleteButton>
          </Flex>
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

export default Component;
