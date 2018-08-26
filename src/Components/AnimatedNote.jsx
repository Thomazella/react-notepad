import { styled, Hidden, keyframes } from "reakit";
import React from "react";
import Note from "./Note";

const dropin = keyframes`
  0% { transform: translateY(100%); opacity: 0; transform: scale(0.7); }
  85% { transform: translateY(-15%); opacity: 0.5; }
`;

const dropout = keyframes`
  35% { transform: translateY(-25%); opacity: 0.6; }
  100% { transform: translateY(100%); opacity: 0.2; transform: scale(0.9); }
`;

const Animated = styled(Hidden)`
  &[aria-hidden="false"] {
    animation: ${dropin} 0.35s;
  }
  &[aria-hidden="true"] {
    animation: ${dropout} 0.35s;
  }
`;

const AnimatedNote = ({ visible, ...props }) => (
  <Hidden.Container>
    {config => (
      <Animated {...config} animated visible={visible}>
        <Note {...props} />
      </Animated>
    )}
  </Hidden.Container>
);

export default AnimatedNote;
