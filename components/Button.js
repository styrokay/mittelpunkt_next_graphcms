import React from "react";
import styled from "styled-components";
const ButtonWrapper = styled.button`
  background: none;
  box-sizing: content-box;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  transition: 0.4s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    a {
      color: white;
    }
  }
  a {
    transition: 1s ease;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 22px;
    font-weight: 300;
    display: block;
    padding: 12px 16px;
  }
`;

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
