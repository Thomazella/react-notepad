// import { styled } from "reakit";
import React from "react";
import Note from "./Note";
import getUniqueId from "../utils/getUniqueId";

const NotepadView = props => {
  const { notes } = props;
  if (!notes || !notes.length) return null;
  return notes.map(note => <Note key={getUniqueId("note")}>{note}</Note>);
};

export default NotepadView;
