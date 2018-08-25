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
  bottom: 6%;
  width: 79%;
  z-index: 100;
`;

const WrapperVertical = styled(Flex)`
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const ToggleButton = styled(NotepadButton)`
  color: white;
  background-color: #333333;
  width: 3.5em;
  height: 3.5em;
  border-style: none;
  &:before {
    background-color: #333333;
    border-color: #333333;
  }
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #b2b2c9;
    color: #011688;
  }
  &:active:before,
  &:focus:before,
  &:hover:before {
    color: #011688;
    transform: scale(2);
    background-color: white;
  }
`;

const ViewWrapper = styled(Popover)`
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
              <ViewWrapper
                placement="bottom-end"
                hideOnClickOutside
                {...config}
              >
                <ModalView
                  notes={modalNotes}
                  deleteNote={deleteNote}
                  {...props}
                />
                <NewNote addNote={addNote} />
                <Popover.Arrow />
              </ViewWrapper>
            </WrapperVertical>
          </WrapperBottom>
        )}
      </NoteContainer>
    )}
  </Popover.Container>
);

export default ModalToggle;
