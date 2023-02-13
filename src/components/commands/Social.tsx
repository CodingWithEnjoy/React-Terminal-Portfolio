import * as React from "react";
import styled from "styled-components";
import { Command } from "../../styles/common";

const List = styled.ul`
  list-style: none;
  width: 100%;
  line-height: 1.8em;
  padding-left: 0;

  @media (max-width: 780px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Item = styled.li`
  display: flex;
  width: 70%;

  @media (max-width: 780px) {
    width: 100%;
  }

  .site {
    width: 30%;
  }

  .url {
    width: 70%;
    color: #50fa7b;
    font-weight: bold;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

const Hint = styled.div`
  @media (max-width: 780px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const socialMedia = [
  {
    site: "GitHub",
    url: "https://github.com/CodingWithEnjoy",
    repo: "https://github.com/CodingWithEnjoy/React-Terminal-Portfolio",
  },
  {
    site: "Twitter",
    url: "https://twitter.com/codingwithenjoy",
  },
  {
    site: "Instagram",
    url: "https://instagram.com/codingwithenjoy/",
  },
];

const Social = () => {
  return (
    <>
      <List>
        {socialMedia.map((item, index) => (
          <Item key={index}>
            <span className="site">{item.site}:</span>
            <a className="url" href={item.url}>
              {item.url}
            </a>
          </Item>
        ))}
      </List>

      <Hint>
        <p>
          A shortcut to open any of the social media listed above is the
          <Command>connect</Command> command.
        </p>
        <p>
          For example: <Command>connect instagram</Command>. Try it out!
        </p>
      </Hint>
    </>
  );
};

export default Social;
