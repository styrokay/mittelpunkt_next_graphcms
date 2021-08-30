import React from "react";
import styled from "styled-components";
const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  height: 300px;
  width: 100%;
  margin-top: 100px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>footer content</div>
    </FooterWrapper>
  );
};

export default Footer;
