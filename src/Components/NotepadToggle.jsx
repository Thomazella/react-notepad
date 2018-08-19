import { styled, Button, Flex } from "reakit";
import PropTypes from "prop-types";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import React from "react";

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

const Wrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 10%;
  width: 63%;
  @media (min-width: 756px) {
    width: 80%;
  }
`;

const NotepadToggle = props => (
  <Wrapper>
    <NotepadButton>
      {props.closed ? <TiArrowMaximise /> : <TiArrowMinimise />}
    </NotepadButton>
  </Wrapper>
);

NotepadToggle.propTypes = {
  closed: PropTypes.bool
};

NotepadToggle.defaultProps = {
  closed: true
};

export default NotepadToggle;
