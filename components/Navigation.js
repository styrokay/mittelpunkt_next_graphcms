import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavbarWrapper = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  left: 0;
  top: 0;
  background: red;
`;

const Navigation = () => {
  return (
    <NavbarWrapper>
      <Link href="/">Willkommen</Link>
      <Link href="/angebot">Angebot</Link>
      <Link href="/referenzen">Referenzen</Link>
      <Link href="/mittelpunkt">Über mittelpunkt</Link>
    </NavbarWrapper>
  );
};

export default Navigation;
