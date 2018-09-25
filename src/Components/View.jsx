import React from "react";
import PropTypes from "prop-types";
import AnimatedNote from "./AnimatedNote";

const View = ({ notes, ...props }) => {
  if (!notes.length) return null;

  return (
    <div>
      {notes.map((note, index) => (
        <AnimatedNote
          key={note.id || "key"}
          index={index}
          visible={note.visible}
          {...props}
        >
          {note.text}
        </AnimatedNote>
      ))}
    </div>
  );
};

View.propTypes = {
  notes: PropTypes.instanceOf(Array),
  deleteNote: PropTypes.func
};

View.defaultProps = {
  notes: [],
  deleteNote: () => {}
};

export default View;
