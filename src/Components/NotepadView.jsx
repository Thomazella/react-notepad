import React from "react";
import { Base } from "reakit";
import PropTypes from "prop-types";
import AnimatedNote from "./AnimatedNote";

const Wrapper = Base;

const NotepadView = ({ notes, deleteNote, ...props }) => {
  if (!notes || !notes.length) return null;

  return (
    <Wrapper {...props}>
      {notes.map((note, index) => (
        <AnimatedNote
          key={note.id}
          deleteNote={deleteNote}
          index={index}
          visible={note.visible}
        >
          {note.text}
        </AnimatedNote>
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
