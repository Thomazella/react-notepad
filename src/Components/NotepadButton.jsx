import { styled, Button } from "reakit";

const NotepadButton = styled(Button)`
  border-radius: 50%;
  border-style: none;
  color: white;
  background-color: #9e3be5;
  height: 3.25em;
  width: 3.25em;
  svg {
    width: 2em;
    height: 2em;
  }
`;

export default NotepadButton;
