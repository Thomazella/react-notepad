import { styled, Button } from "reakit";

const NotepadButton = styled(Button.as("button"))`
  border-radius: 50%;
  border-style: none;
  padding: 0;
  min-height: unset;
  min-width: unset;
  background-image: none;
  overflow: hidden;
  vertical-align: middle;
  touch-action: manipulation;
  letter-spacing: 0.02em;
  transition-timing-function: ease-out;
  line-height: 2.5em;
  width: 100%;
  z-index: 10;
  svg {
    z-index: 20;
    width: 2em;
    height: 2em;
  }
  &:before,
  & {
    transition-duration: 0.3s;
    transition-property: color, transform, background-color, border;
  }
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    transition-timing-function: ease-out;
    border: 1px solid #fff;
    background: white;
    transform: scale(0);
  }
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #66667c;
    color: #333;
    transform: scale(1.1);
  }
  &:active:before,
  &:focus:before,
  &:hover:before {
    transform: scale(2);
    background: #ffce00;
  }
`;

export default NotepadButton;
