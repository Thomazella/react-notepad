import React from "react";
import { Base, styled } from "reakit";
import PropTypes from "prop-types";
import Note from "./Note";
import getUniqueId from "../utils/getUniqueId";

const Wrapper = styled(Base)`
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 250px;
  @media (min-width: 756px) {
    max-height: 470px;
  }
`;

const NotepadView = ({ notes, deleteNote }) => {
  if (!notes || !notes.length) return null;

  return (
    <Wrapper>
      {notes.map((note, index) => (
        <Note key={getUniqueId("note")} deleteNote={deleteNote} index={index}>
          {note}
        </Note>
      ))}
    </Wrapper>
  );
};

NotepadView.propTypes = {
  notes: PropTypes.instanceOf(Array),
  deleteNote: PropTypes.func
};

NotepadView.defaultProps = {
  notes: [],
  deleteNote: () => undefined
};

export default NotepadView;
