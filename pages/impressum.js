import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

const ImpressumWrapper = styled.div`
  h3 {
    font-weight: 400;
  }
  address {
    font-style: normal;
    font-size: 21px;
  }
`;

const Impressum = () => {
  return (
    <ImpressumWrapper>
      <Container>
        <h1>Impressum</h1>
        <h3>Kontakt, Verantwortung Inhalt</h3>
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
      </Container>
    </ImpressumWrapper>
  );
};

export default Impressum;
