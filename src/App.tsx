import styled, { keyframes, css } from "styled-components";
import Terminal from "./components/Terminal";
import { QueryClient, QueryClientProvider } from "react-query";
import { useTheme } from "./hooks/useTheme";
import AnimatedTitle from "./components/AnimatedTitle";

const drunk = keyframes`

0%{
  filter: blur(0.5px);
}

25%{
  filter: blur(1.5px);
}

50%{
  filter: blur(0.75px);
}

75%{
  filter: blur(1.5px);
}

100%{
  filter: blur(0.5px);
}
`;

const Wrapper = styled.div`
  background: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 15px;

  @media (max-width: 780px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }

  ${(props) =>
    props.theme === "drunk" &&
    css`
      animation: ${drunk} 10s linear infinite;
    `};
`;

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper theme={theme}>
        <AnimatedTitle />
        <Terminal />
      </Wrapper>
    </QueryClientProvider>
  );
};

export default App;
