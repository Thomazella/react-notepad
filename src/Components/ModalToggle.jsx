import { styled, Flex, Popover, Backdrop } from "reakit";
import React from "react";
import NoteContainer from "../Containers/NoteContainer";
import ToggleButton from "./ToggleButton";
import NotepadView from "./NotepadView";
import NewNote from "./NewNote";

const WrapperBottom = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 4%;
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

const InvisibleBackdrop = styled(Backdrop)`
  z-index: 80;
  background-color: transparent;
`;

const ModalToggle = props => (
  <Popover.Container>
    {config => (
      <WrapperBottom>
        <WrapperVertical>
          <ToggleButton as={Popover.Toggle} {...config} />
          <InvisibleBackdrop as={Popover.Hide} {...config} />
          <Modal
            placement="bottom-end"
            hideOnClickOutside
            fade
            slide="bottom"
            duration="0.3s"
            {...config}
          >
            <NoteContainer>
              {({ modalNotes, hideNote }) => (
                <ModalView
                  notes={modalNotes}
                  deleteNote={hideNote}
                  {...props}
                />
              )}
            </NoteContainer>
            <NewNote />
            <Popover.Arrow />
          </Modal>
        </WrapperVertical>
      </WrapperBottom>
    )}
  </Popover.Container>
);

export default ModalToggle;
