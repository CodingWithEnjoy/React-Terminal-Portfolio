import { Command } from "../../styles/common";
import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";
import styled from "styled-components";

const Hint = styled.p`
  &:after {
    content: "\\1F62C";
  }
`;

const DrunkMode = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => setTheme("drunk"));

  return (
    <>
      <p>
        You Turned On <Command>DrunkMode</Command>!
      </p>
      <p>
        To Go Back To Normal, Use The <Command>Reset</Command> Command
      </p>
      <Hint>Or Go Drink Some Water !!!</Hint>
    </>
  );
};

export default DrunkMode;
