import { styled, Flex } from "reakit";
import PropTypes from "prop-types";
import React from "react";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NotepadButton from "./NotepadButton";

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
    <NotepadButton onClick={props.onClick}>
      {props.closed ? <TiArrowMaximise /> : <TiArrowMinimise />}
    </NotepadButton>
  </Wrapper>
);

NotepadToggle.propTypes = {
  closed: PropTypes.bool,
  onClick: PropTypes.func
};

NotepadToggle.defaultProps = {
  closed: true,
  onClick: () => null
};

export default NotepadToggle;
