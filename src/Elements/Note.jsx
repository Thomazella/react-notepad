import { styled, InlineFlex } from "reakit";

const Note = styled(InlineFlex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  line-height: 1.5;
  letter-spacing: 0.02em;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  transition-property: color, transform, background-color;
  border-radius: 20px;
  min-height: 40px;
`;

export default Note;
