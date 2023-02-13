import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  width: 100%;
  line-height: 1.8em;
  padding: 0;

  @media (max-width: 810px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
    width: 105%;
  }
`;

const Item = styled.li`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 810px) {
    width: 100%;
  }

  .command {
    width: 20%;
  }
  .pipe {
    width: 10%;

    @media (max-width: 450px) {
      width: 5%;
      padding-left: 5px;
    }
  }
  .description {
    width: 70%;
  }
`;

const items = [
  {
    command: "help",
    pipe: "|",
    description: "displays the list of available commands",
  },
  {
    command: "github",
    pipe: "|",
    description: "fetches data about the developer from the GitHub API",
  },
  { command: "clear / reset", pipe: "|", description: "clears the console" },
  {
    command: "echo",
    pipe: "|",
    description: "prints a message to the console. E.g: echo Hello World!",
  },
  {
    command: "about",
    pipe: "|",
    description: "displays information about the developer",
  },
  {
    command: "social",
    pipe: "|",
    description: "displays the list of the developer social media",
  },
  {
    command: "connect",
    pipe: "|",
    description: "redirects towards my profile in the given social media",
  },
  {
    command: "source",
    pipe: "|",
    description: "opens the source code on the github repository",
  },
  {
    command: "docs",
    pipe: "|",
    description: "opens the project documentation in the notion web page",
  },
  {
    command: "drunkmode",
    pipe: "|",
    description: "have you ever used a terminal while you were drunk?...",
  },
];

const Help = () => {
  return (
    <List>
      {items.map((item, index) => (
        <Item key={index}>
          <span className="command">{item.command}</span>
          <span className="pipe">{item.pipe}</span>
          <span className="description">{item.description}</span>
        </Item>
      ))}
    </List>
  );
};

export default Help;
