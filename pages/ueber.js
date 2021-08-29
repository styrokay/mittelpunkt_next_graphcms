import React from "react";
import Image from "next/image";
import { getAboutData } from "../lib/data";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Container from "../components/Container";

const AboutWrapper = styled.div`
  section {
    max-width: 700px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
`;

const Ueber = ({ data }) => {
  return (
    <AboutWrapper>
      <Container>
        <h1>Team</h1>
      </Container>
      {data.teams.map((e, index) => {
        return (
          <div key={index}>
            <Container>
              <h4>{e.name}</h4>
              <p>{e.jobtitle}</p>
            </Container>
            {e.image ? (
              <ImageWrapper>
                <Image
                  objectPosition="top"
                  quality="100"
                  layout="fill"
                  objectFit="cover"
                  src={e.image.url}
                />
              </ImageWrapper>
            ) : null}
            <Container>
              {e.description ? (
                <div className="TextContainer">
                  {" "}
                  <RichText content={e.description.raw} />
                </div>
              ) : null}
            </Container>
          </div>
        );
      })}

      {data.abouts[0].description.map((e, index) => {
        return (
          <Container>
            <div className="TextContainer" key={index}>
              <RichText content={e.raw} />
            </div>
          </Container>
        );
      })}
    </AboutWrapper>
  );
};

export default Ueber;

export const getStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
  };
};
