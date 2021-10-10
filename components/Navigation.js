import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Hamburger from "./Hamburger";

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

  .icon {
    margin-right: auto;
    margin-left: auto;
  }
`;

const Navigation = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      <div className="icon">
        <Image height={60} width={60} src="/logo.svg" />
      </div>
      <div>
        <Hamburger />
      </div>
      {/*     <div className={`link-wrapper ${router.pathname == "/" ? "active" : ""}`}>
        <Link scroll={false} href="/">
          Willkommen
        </Link>
      </div>

      <div
        className={`link-wrapper ${
          router.pathname == "/angebot" ? "active" : ""
        }`}
      >
        <Link scroll={false} href="/angebot">
          Angebot
        </Link>
      </div>

      <div
        className={`link-wrapper ${
          router.pathname == "/referenzen" ? "active" : ""
        }`}
      >
        <Link scroll={false} href="/referenzen">
          Referenzen
        </Link>
      </div>
      <div
        className={`link-wrapper ${router.pathname == "/team" ? "active" : ""}`}
      >
        <Link scroll={false} href="/team">
          Team
        </Link>
      </div>
      <div
        className={`link-wrapper ${
          router.pathname == "/ueber" ? "active" : ""
        }`}
      >
        <Link scroll={false} href="/ueber">
          Über mittelpunkt
        </Link>
      </div> */}
    </NavbarWrapper>
  );
};

export default Navigation;
