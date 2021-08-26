import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
const SiteRoot = styled.div`
  margin-top: 80px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <SiteRoot>{children}</SiteRoot>
      <Footer />
    </>
  );
};

export default Layout;
