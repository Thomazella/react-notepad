import { styled, Flex, Popover, Backdrop } from "reakit";
import { connect } from "react-redux";
import React from "react";
import ToggleButton from "../../src/components/ToggleButton";
import View from "../../src/components/View";
import NewNote from "../../src/components/NewNote";
import { selectModalNotes } from "../selectors";
import { hideThenDelete } from "../actions";

const ConnectedView = connect(
  selectModalNotes,
  hideThenDelete
)(View);

const WrapperBottom = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 83%;
  width: 86%;
  z-index: 100;
`;

const WrapperVertical = styled(Flex)`
  z-index: 100;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const StyledPopover = styled(Popover)`
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

const Noteview = styled(ConnectedView)`
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

const Modal = props => (
  <Popover.Container>
    {config => (
      <WrapperBottom>
        <WrapperVertical>
          <ToggleButton as={Popover.Toggle} {...config} />
          <InvisibleBackdrop as={Popover.Hide} {...config} />
          <StyledPopover
            placement="bottom-end"
            hideOnClickOutside
            fade
            slide="bottom"
            duration="0.3s"
            {...config}
          >
            <Noteview {...props} />
            <NewNote />
            <Popover.Arrow />
          </StyledPopover>
        </WrapperVertical>
      </WrapperBottom>
    )}
  </Popover.Container>
);

export default Modal;
