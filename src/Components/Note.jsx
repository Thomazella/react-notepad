import { styled, InlineFlex, Block } from "reakit";
import React from "react";

const Box = styled(InlineFlex)`
  border-bottom: 2px solid black;
  justify-content: space-between;
  width: 100%;
`;

const Note = incomingProps => {
  const { children, ...props } = incomingProps;
  return (
    <Block>
      <Box {...props}>{children}</Box>
    </Block>
  );
};

export default Note;
