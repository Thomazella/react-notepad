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
  transition-timing-function: ease;
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
    transition-property: color, transform;
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
    background-color: white;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    outline: 0;
  }
  &:active:focus,
  &:focus {
    outline-offset: -2px;
  }
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #66667c;
    color: #fff;
    transform: scale(1.1);
  }
  &:active:before,
  &:focus:before,
  &:hover:before {
    transform: scale(2);
    background-color: #66667c;
  }
`;

export default NotepadButton;
