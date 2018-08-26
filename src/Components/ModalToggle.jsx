import { styled, Flex, Popover } from "reakit";
import React from "react";
import NoteContainer from "../Containers/NoteContainer";
import ToggleButton from "./ToggleButton";
import NotepadView from "./NotepadView";
import NewNote from "./NewNote";

const WrapperBottom = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 87%;
  width: 86%;
  z-index: 100;
`;

const WrapperVertical = styled(Flex)`
  z-index: 100;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const Modal = styled(Popover)`
  width: 100%;
  min-height: 60%;
  min-height: 60vh;
  padding: 0.8em;
  z-index: 100;
  @media (min-width: 756px) {
    padding: 2em;
    max-width: 70%;
  }
`;

const ModalView = styled(NotepadView)`
  max-height: 70vh;
  overflow-y: auto;
  @media (min-width: 756px) {
    max-height: 50vh;
  }
`;

const ModalToggle = props => (
  <Popover.Container>
    {config => (
      <NoteContainer>
        {({ modalNotes, hideNote, addNote }) => (
          <WrapperBottom>
            <WrapperVertical>
              <ToggleButton as={Popover.Toggle} {...config} />
              <Modal
                placement="bottom-end"
                hideOnClickOutside
                fade
                slide="bottom"
                duration="0.3s"
                {...config}
              >
                <ModalView
                  notes={modalNotes}
                  deleteNote={hideNote}
                  {...props}
                />
                <NewNote addNote={addNote} />
                <Popover.Arrow />
              </Modal>
            </WrapperVertical>
          </WrapperBottom>
        )}
      </NoteContainer>
    )}
  </Popover.Container>
);

export default ModalToggle;
