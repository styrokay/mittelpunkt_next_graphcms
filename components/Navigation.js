import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavbarWrapper = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  left: 0;
  top: 0;

  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-size: 23px;
    font-weight: 300;
    margin: 0 30px;
    text-decoration: none;
    color: black;
  }
`;

const Navigation = () => {
  return (
    <NavbarWrapper>
      <Link href="/">Willkommen</Link>
      <Link href="/angebot">Angebot</Link>
      <Link href="/referenzen">Referenzen</Link>
      <Link href="/ueber">Über mittelpunkt</Link>
    </NavbarWrapper>
  );
};

export default Navigation;
