import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Hamburger from "./Hamburger";
import media from "styled-media-query";
import { useAppContext } from "../context/state";

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
  ${media.lessThan("medium")`
    padding: 0 20px;
    
    `}

  .link-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: left 0.4s ease;
    ${media.lessThan("medium")`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 80px;
    left: ${(props) => (props.open ? "0" : "-100%")};
    background: white;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    justify-content: flex-start;
    ${media.lessThan("medium")`
    align-items: flex-end;
    
    `}
    
    `};
  }

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
    ${media.lessThan("medium")`
    margin: 30px;

    `}
    ::after {
      position: absolute;
      bottom: 0;
      background: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 2px;
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
    ::after {
      position: absolute;
      bottom: 0;
      background: ${({ theme }) => theme.colors.primary};
      content: "";
      height: 2px;
      width: 100%;
      left: 0;
      transition: all 0.2s ease-in-out;
      z-index: -1;
    }
  }
  button {
    ${media.greaterThan("medium")`
   display: none;
    
    `}
  }
  .icon {
    margin: auto;
    ${media.lessThan("medium")`
margin: 15px auto auto 0;
    
    `}
  }
`;

const Navigation = () => {
  const { open, handleOpen } = useAppContext();
  const router = useRouter();

  return (
    <NavbarWrapper open={open}>
      <div className="icon">
        <Link href="/">
          <a>
            <Image height={60} width={60} src="/logo.svg" />
          </a>
        </Link>
      </div>

      <div>
        <Hamburger />
      </div>
      <div className="link-menu">
        <div
          onClick={handleOpen}
          className={`link-wrapper ${router.pathname == "/" ? "active" : ""}`}
        >
          <Link scroll={false} href="/">
            Willkommen
          </Link>
        </div>
        <div
          onClick={handleOpen}
          className={`link-wrapper ${
            router.pathname == "/angebot" ? "active" : ""
          }`}
        >
          <Link scroll={false} href="/angebot">
            Angebot
          </Link>
        </div>
        <div
          onClick={handleOpen}
          className={`link-wrapper ${
            router.pathname == "/referenzen" ? "active" : ""
          }`}
        >
          <Link scroll={false} href="/referenzen">
            Referenzen
          </Link>
        </div>
        <div
          onClick={handleOpen}
          className={`link-wrapper ${
            router.pathname == "/team" ? "active" : ""
          }`}
        >
          <Link scroll={false} href="/team">
            Team
          </Link>
        </div>
        <div
          onClick={handleOpen}
          className={`link-wrapper ${
            router.pathname == "/ueber" ? "active" : ""
          }`}
        >
          <Link scroll={false} href="/ueber">
            Über mittelpunkt
          </Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navigation;
