import { Command } from "../../styles/common";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  .error {
    color: #ff8b8b;
    font-weight: bold;
    line-height: 2em;
  }
`;

const CommandNotFound = () => {
  return (
    <Wrapper>
      <span className="error">Command Not Found !</span>
      <span>
        Try The <Command>Help</Command> Command To See A List Of Available
        Commands
      </span>
    </Wrapper>
  );
};

export default CommandNotFound;
