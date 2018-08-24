import { styled, Button } from "reakit";

const NotepadButton = styled(Button.as("button"))`
  border-radius: 50%;
  border-style: none;
  padding: 0;
  min-height: unset;
  min-width: unset;
  svg {
    width: 2em;
    height: 2em;
  }
`;

export default NotepadButton;
