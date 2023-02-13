import { Command } from "../styles/common";
import styled, { keyframes } from "styled-components";

const Typing = keyframes`
    from{width:0%}
    to{width: 100%}
`;

const AnimatedCursor = keyframes`
    from, to { border-color: transparent }
  50% { border-color: aliceblue; }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 85%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const Subtitle = styled.h4`
  overflow: hidden;
  border-right: 0.15em solid aliceblue;
  white-space: nowrap;
  margin: 0 auto;
  animation: ${Typing} 3.5s steps(40, end),
    ${AnimatedCursor} 0.75s step-end infinite;
  color: aliceblue;
  font-size: 25px;

  @media (max-width: 780px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const AnimatedTitle = () => {
  return (
    <Wrapper>
      <Subtitle>
        Don't Know Where To Start ? Try The <Command>Help</Command> Command !
      </Subtitle>
    </Wrapper>
  );
};

export default AnimatedTitle;
