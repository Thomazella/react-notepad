import React from "react";
import { styled } from "reakit";
import { connect } from "react-redux";
import View from "./View";
import Modal from "./Modal";
import { hideThenDelete } from "../actions";
import { selectNotes } from "../selectors";

const HomeView = styled("div")`
  width: 100%;
  @media (min-width: 756px) {
    max-width: 65%;
  }
`;

const Wrapper = styled("div")`
  background-color: #878787;
  padding: 2rem;
  min-height: 82vh;
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  @media (min-width: 756px) {
    padding: 1.5rem 4rem;
  }
`;

const ConnectedView = connect(
  selectNotes,
  hideThenDelete
)(View);

const Notepad = props => (
  <Wrapper>
    <HomeView>
      <ConnectedView {...props} />
    </HomeView>
    <Modal {...props} />
  </Wrapper>
);

export default Notepad;
