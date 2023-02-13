import styled from "styled-components";

interface Props {
  message?: string;
}

const Message = styled.span`
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Echo = ({ message = "Hello World !!!" }: Props) => {
  return <Message>{message}</Message>;
};

export default Echo;
