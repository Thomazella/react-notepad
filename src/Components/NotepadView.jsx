import React from "react";
import { Base } from "reakit";
import PropTypes from "prop-types";
import Note from "./Note";
import getUniqueId from "../utils/getUniqueId";

const Wrapper = Base;

const NotepadView = ({ notes, deleteNote, ...props }) => {
  if (!notes || !notes.length) return null;

  return (
    <Wrapper {...props}>
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
