import React from "react";
import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";

const CommandInputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #50fa7b;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  border: none;
  background: none;
  padding: 5px;
  flex: 1;
  color: aliceblue;
  font-size: 15px;
  caret-color: #50fa7b;

  @media (max-width: 780px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }

  &:focus {
    outline: none;
  }
`;

interface Props {
  inputValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CommandInput = React.forwardRef<HTMLInputElement, Props>(
  ({ inputValue, changeHandler, submitHandler }, ref) => {
    return (
      <CommandInputWrapper>
        <HiArrowSmRight size={23} />
        <Form onSubmit={(e) => submitHandler(e)} data-testid="terminalForm">
          <Input
            data-testid="terminalInput"
            spellCheck="false"
            ref={ref}
            type="text"
            autoFocus={true}
            value={inputValue}
            onChange={(e) => changeHandler(e)}
          />
        </Form>
      </CommandInputWrapper>
    );
  }
);

export default React.memo(CommandInput);
