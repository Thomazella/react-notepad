import { styled, Flex, Popover } from "reakit";
import PropTypes from "prop-types";
import React from "react";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NotepadButton from "./NotepadButton";
import NotepadView from "./NotepadView";
import NewNote from "./NewNote";

const WrapperBottom = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 10%;
  width: 63%;
  @media (min-width: 756px) {
    width: 80%;
  }
`;

const WrapperVertical = styled(Flex)`
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const ToggleButton = styled(NotepadButton)`
  color: white;
  background-color: #9e3be5;
`;

const FloatingView = styled(Popover)`
  width: 100%;
  min-height: 60%;
  min-height: 60vh;
  background-color: rgba(221, 221, 221, 0.95);
`;

const NotepadToggle = props => {
  const { onClick, closed, notes, deleteNote, addNote } = props;
  return (
    <WrapperBottom>
      <Popover.Container>
        {config => (
          <WrapperVertical>
            <ToggleButton as={Popover.Toggle} onClick={onClick} {...config}>
              {closed ? <TiArrowMaximise /> : <TiArrowMinimise />}
            </ToggleButton>
            <FloatingView placement="bottom-end" hideOnClickOutside {...config}>
              <NotepadView notes={notes} deleteNote={deleteNote} />
              <NewNote addNote={addNote} />
              <Popover.Arrow color="#ddd" />
            </FloatingView>
          </WrapperVertical>
        )}
      </Popover.Container>
    </WrapperBottom>
  );
};

NotepadToggle.propTypes = {
  closed: PropTypes.bool,
  onClick: PropTypes.func
};

NotepadToggle.defaultProps = {
  closed: true,
  onClick: () => null
};

export default NotepadToggle;
