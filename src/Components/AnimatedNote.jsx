import { styled, Hidden, keyframes } from "reakit";
import React from "react";
import Note from "./Note";

const dropin = keyframes`
  0% { transform: translateY(+100%); opacity: 0; transform: scale(0.7); }
  85% { transform: translateY(-15%); opacity: 0.5; }
`;

const dropout = keyframes`
  0% { transform: none }
  50% { transform: rotateZ(180deg) }
  100% { transform: rotateZ(180deg) translateX(1000%) }
`;

const Animated = styled(Hidden)`
  &[aria-hidden="false"] {
    animation: ${dropin} 0.35s;
  }
  &[aria-hidden="true"] {
    animation: ${dropout} 0.35s;
  }
`;

const AnimatedNote = props => (
  <Hidden.Container>
    {config => (
      <Animated {...config} visible>
        <Note {...props} />
      </Animated>
    )}
  </Hidden.Container>
);

export default AnimatedNote;
