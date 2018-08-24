import { styled, Flex, Popover } from "reakit";
import React from "react";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NoteContainer from "../Containers/NoteContainer";
import NotepadButton from "./NotepadButton";
import NotepadView from "./NotepadView";
import NewNote from "./NewNote";

const WrapperBottom = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 10%;
  width: 79%;
`;

const WrapperVertical = styled(Flex)`
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const ToggleButton = styled(NotepadButton)`
  color: #011688;
  background-color: #2effc3;
  width: 3.5em;
  height: 3.5em;
`;

const FloatingView = styled(Popover)`
  width: 100%;
  min-height: 60%;
  min-height: 60vh;
  padding: 0.8em;
  @media (min-width: 756px) {
    padding: 2em;
    max-width: 70%;
  }
`;

const ModalToggle = props => (
  <Popover.Container>
    {config => (
      <NoteContainer context="notepad">
        {({ toggle, closed, modalNotes, deleteNote, addNote }) => (
          <WrapperBottom>
            <WrapperVertical>
              <ToggleButton
                as={Popover.Toggle}
                onClick={() => toggle()}
                {...config}
              >
                {closed ? <TiArrowMaximise /> : <TiArrowMinimise />}
              </ToggleButton>
              <FloatingView
                placement="bottom-end"
                hideOnClickOutside
                {...config}
              >
                <NotepadView
                  notes={modalNotes}
                  deleteNote={deleteNote}
                  {...props}
                />
                <NewNote addNote={addNote} />
                <Popover.Arrow />
              </FloatingView>
            </WrapperVertical>
          </WrapperBottom>
        )}
      </NoteContainer>
    )}
  </Popover.Container>
);

export default ModalToggle;
