import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";
import Path from "./Path";

interface Props {
  inputValue: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #50fa7b;
`;

const PreviousCommand = styled.span`
  border: none;
  background: none;
  padding: 5px;
  flex: 1;
  color: aliceblue;
`;

const HistoryItems = ({ inputValue }: Props) => {
  return (
    <>
      <Path path="~/home" />
      <Wrapper>
        <HiArrowSmRight size={23} />
        <PreviousCommand>{inputValue}</PreviousCommand>
      </Wrapper>
    </>
  );
};

export default HistoryItems;
