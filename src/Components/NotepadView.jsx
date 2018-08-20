// import { styled } from "reakit";
import React from "react";
import Note from "./Note";
import getUniqueId from "../utils/getUniqueId";

const NotepadView = props => {
  const { notes, deleteNote } = props;
  if (!notes || !notes.length) return null;
  return notes.map((note, index) => (
    <Note key={getUniqueId("note")} deleteNote={deleteNote} index={index}>
      {note}
    </Note>
  ));
};

export default NotepadView;
