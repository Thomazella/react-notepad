import React from "react";
import { Base, styled, Container } from "reakit";
import NotepadView from "../Components/NotepadView";
import NotepadToggle from "../Components/NotepadToggle";

const LeftView = styled(Base)`
  max-width: 100%;
  @media (min-width: 756px) {
    max-width: 50%;
  }
`;

const Wrapper = styled(Base)`
  background-color: #ddd;
  padding: 4rem;
  min-height: 100vh;
  min-width: 100vw;
`;

const Notepad = () => (
  <Container initialState={{ notes: ["foo", "bar"], closed: true }}>
    {({ notes, closed }) => (
      <Wrapper>
        <LeftView>
          <NotepadView notes={notes} />
        </LeftView>
        <NotepadToggle closed={closed} />
      </Wrapper>
    )}
  </Container>
);

export default Notepad;
