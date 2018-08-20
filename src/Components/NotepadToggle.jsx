import { styled, Flex, Popover, Input } from "reakit";
import PropTypes from "prop-types";
import React from "react";
import {
  TiArrowMaximise,
  TiArrowMinimise,
  TiArrowRightThick
} from "react-icons/ti";
import NotepadButton from "./NotepadButton";
import NotepadView from "./NotepadView";

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

const WrapperInput = styled(Flex)`
  position: absolute;
  align-items: center;
  margin-bottom: 0.5em;
  bottom: 0;
`;

const ToggleButton = styled(NotepadButton)`
  color: white;
  background-color: #9e3be5;
`;

const SubmitButton = styled(ToggleButton)`
  transform: scale(0.7);
`;

const FloatingView = styled(Popover)`
  width: 100%;
  min-height: 60%;
  min-height: 60vh;
  background-color: rgba(86.7%, 86.7%, 86.7%, 0.95);
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
              <Popover.Arrow color="#ddd" />
              <NotepadView notes={notes} deleteNote={deleteNote} />
              <WrapperInput>
                <Input placeholder="Add a note" outlineColor="#9e3be5" />
                <SubmitButton onClick={() => addNote("foobar")}>
                  <TiArrowRightThick />
                </SubmitButton>
              </WrapperInput>
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
