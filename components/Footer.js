import React from "react";
import styled from "styled-components";
const FooterWrapper = styled.footer`
  background: #353535;
  height: 300px;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>footer content</div>
    </FooterWrapper>
  );
};

export default Footer;
