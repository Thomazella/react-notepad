import React from "react";
import { Base, styled } from "reakit";
import NotepadView from "../Components/NotepadView";

const LeftView = styled(Base)`
  max-width: 50%;
`;

const Wrapper = styled(Base)`
  background-color: #ddd;
  padding: 4rem;
  min-height: 100vh;
  min-width: 100vw;
`;

class Notepad extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { notes: ["foo", "bar"] };
  }

  render() {
    const { notes } = this.state;
    return (
      <Wrapper>
        <LeftView>
          <NotepadView notes={notes} />
        </LeftView>
      </Wrapper>
    );
  }
}

export default Notepad;
