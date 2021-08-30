import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarWrapper = styled.nav`
  position: fixed;
  background: white;
  height: 80px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .link-wrapper {
    a {
      text-decoration: none;
      color: black;
    }

    font-size: 23px;
    position: relative;
    font-weight: 300;
    margin: 0 30px;

    background: white;
    z-index: 200;
    transition: all 0.2s ease-in-out;
    ::after {
      position: absolute;

      background: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 100%;
      width: 0%;
      left: 0;
      transition: all 0.2s ease-in-out;
      z-index: -1;
    }

    :hover {
      color: white;
      ::after {
        width: 100%;
      }
    }
  }

  .active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Navigation = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      <div className={`link-wrapper ${router.pathname == "/" ? "active" : ""}`}>
        <Link href="/">Willkommen</Link>
      </div>

      <div
        className={`link-wrapper ${
          router.pathname == "/angebot" ? "active" : ""
        }`}
      >
        <Link href="/angebot">Angebot</Link>
      </div>

      <div
        className={`link-wrapper ${
          router.pathname == "/referenzen" ? "active" : ""
        }`}
      >
        <Link href="/referenzen">Referenzen</Link>
      </div>

      <div
        className={`link-wrapper ${
          router.pathname == "/ueber" ? "active" : ""
        }`}
      >
        <Link href="/ueber">Über mittelpunkt</Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navigation;
