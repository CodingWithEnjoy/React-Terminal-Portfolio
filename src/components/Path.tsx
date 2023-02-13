import styled from "styled-components";

interface Props {
  path: string;
}

const LabelContainer = styled.div`
  display: flex;
  color: aliceblue;

  .user {
    margin-right: 0.3em;
    color: #50fa7b;
  }

  .in {
    margin-right: 0.3em;
  }

  .path {
    font-weight: bold;
    color: #f1fa8c;
  }
`;

const Path = ({ path }: Props) => {
  return (
    <LabelContainer>
      <span className="user">User </span>
      <span className="in">in </span>
      <span className="path">{path}</span>
    </LabelContainer>
  );
};

export default Path;
