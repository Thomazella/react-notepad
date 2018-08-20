import { styled, Button } from "reakit";

const NotepadButton = styled(Button.as("button"))`
  border-radius: 50%;
  border-style: none;
  height: 3.25em;
  width: 3.25em;
  svg {
    width: 2em;
    height: 2em;
  }
`;

export default NotepadButton;
