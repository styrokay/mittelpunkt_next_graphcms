import React from "react";
import styled from "styled-components";
import Link from "next/link";
import media from "styled-media-query";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 300px;
  width: 100%;
  display: flex;
  padding: 2rem;
  color: white;
  ${media.lessThan("medium")`
flex-direction: column;

`}

  section {
    flex: 1;

    #title {
      font-weight: 500;
    }
    a {
      text-decoration: underline;
      text-underline-offset: 2px;
      color: white;
    }
    address {
      font-style: normal;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <section>
        <p id="title">Kontakt</p>
        <address>
          <p>
            mittelpunkt <br />
            Anna B. Schmid <br />
            Attinghausenstrasse 20 <br />
            3014 Bern <br />
            <a href="mailto: anna.b.schmid@mittel.be">
              E-Mail: anna.b.schmid@mittel.be
            </a>{" "}
            <br />
            <a href="tel: +41794799704">079 479 97 04</a>
          </p>
        </address>
      </section>
      <section>
        <p id="title">Links</p>
        <Link href="/agb">AGB </Link> <br />
        <Link href="/agb">Impressum </Link>
        <br />
        <Link href="https://www.ombudsstellebern.ch/">Ombudsstelle</Link>
        <br />
      </section>
    </FooterWrapper>
  );
};

export default Footer;
