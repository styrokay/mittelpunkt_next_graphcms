import React from "react";
import styled from "styled-components";
import Image from "next/image";

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 40px;
  font-weight: 300;
  margin: 200px 0;

  .hero-text {
    margin: auto;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Image height={500} width={500} src="/image/logo.svg" />
      <div className="hero-text">
        Angebot für Freizeit und Ferienbegleitung für Menschen mit einer
        geistigen, psychischen oder körperlichen Beeinträchtigung
      </div>
    </HeroWrapper>
  );
};

export default Hero;
