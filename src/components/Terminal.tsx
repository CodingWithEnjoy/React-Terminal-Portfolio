import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { keyframes, css } from "styled-components";
import CommandInput from "./CommandInput";
import Path from "./Path";
import { useTheme } from "../hooks/useTheme";

const About = React.lazy(() => import("./commands/About"));
const Help = React.lazy(() => import("./commands/Help"));
const CommandNotFound = React.lazy(() => import("./commands/CommandNotFound"));
const Echo = React.lazy(() => import("./commands/Echo"));
const Social = React.lazy(() => import("./commands/Social"));
const Connect = React.lazy(() => import("./commands/Connect"));
const GitHub = React.lazy(() => import("./commands/GitHub"));
const DrunkMode = React.lazy(() => import("./commands/DrunkMode"));
const HistoryItems = React.lazy(() => import("./HistoryItems"));

const drunk = keyframes`
  0%{
    filter: blur(0.5px);
  }

  25%{
    filter: blur(1.5px);
    transform: scale(1.01) rotate(2deg) translate(10px, 15px);
  }

  50%{
    filter: blur(0.75px);
    transform: scale(1.003) translate(5px, 20px) ; 
  }

  75%{
    filter: blur(1.5px);
    transform: rotate(-3deg) translate(-18px, -10px) scale(0.99);
  }

  100%{
    filter: blur(0.5px);
  }
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  width: 70%;

  ${(props) =>
    props.theme === "drunk" &&
    css`
      animation: ${drunk} 10s linear infinite;
    `}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  background-color: #898aa6;
  box-sizing: border-box;
  position: sticky;
`;

const MacOsButtons = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;

const RoundedButton = styled.div<ButtonProps>`
  width: 18px;
  height: 18px;

  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const TerminalTitle = styled.h1`
  font-size: 12px;
  justify-self: center;
  margin-left: 70px;
  color: aliceblue;
  position: absolute;
  top: 0;
  left: 40%;
`;

const Body = styled.div`
  height: 60vh;
  border: 5px solid #898aa6;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem 1rem 1rem;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #474e68;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px grey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6b728e;
    border-radius: 15px;
    height: 2px;
  }
`;

const OutputWrapper = styled.div`
  color: aliceblue;
  padding-left: 2em;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

interface ButtonProps {
  color: string;
}

const Terminal = () => {
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processInputString = (command: string): string[] => {
    let input = command.split(" ");

    if (input.length > 2) {
      const cmd = input.splice(0, 1);

      const args = input.join(" ");
      return (input = [...cmd, args]);
    }

    return [...input];
  };

  const renderTerminalResponse = (command: string) => {
    const [key, argument] = processInputString(command);

    switch (key.toLowerCase()) {
      case "about":
        return <About />;

      case "help":
        return <Help />;

      case "clear":
        setCommandsHistory([]);
        break;

      case "echo":
        return <Echo message={argument} />;

      case "social":
        return <Social />;

      case "connect":
        return <Connect social={argument} />;

      case "source":
        return <Connect social="repository" />;

      case "github":
        return <GitHub />;

      case "drunkmode":
        return <DrunkMode />;

      case "reset":
        setCommandsHistory([]);
        setTheme("dracula");
        break;

      default:
        return <CommandNotFound />;
    }
  };

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      processInputString(inputValue);
      setCommandsHistory([...commandsHistory, inputValue]);
      setInputValue("");
    },
    [inputValue, commandsHistory]
  );

  const clickHandler = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Column theme={theme}>
      <Header>
        <MacOsButtons>
          <RoundedButton color="#ff605c" />
          <RoundedButton color="#ffbd44" />
          <RoundedButton color="#00ca4e" />
        </MacOsButtons>
        <TerminalTitle>Terminal</TerminalTitle>
      </Header>
      <Body onClick={() => clickHandler()}>
        {commandsHistory.map((item: any, index: number) => (
          <div key={index}>
            <Suspense fallback={<></>}>
              <HistoryItems inputValue={item} />
              <OutputWrapper>{renderTerminalResponse(item)}</OutputWrapper>
            </Suspense>
          </div>
        ))}

        <Path path={"~/home"} />
        <CommandInput
          data-testid="terminalInput"
          ref={inputRef}
          inputValue={inputValue}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </Body>
    </Column>
  );
};

export default Terminal;
