import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Image from "next/image";
import { getAboutData } from "../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";
import media from "styled-media-query";
import { NextSeo } from "next-seo";

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  margin: 30px 0;
  ${media.lessThan("medium")`
height: 300px !important;
`}
`;

const TeamWrapper = styled.div`
  .name {
    font-weight: 500;
    font-size: 30px;
    margin: 10px 0;
  }
  .jobtitle {
    font-size: 20px;
    margin: 0;
  }

  .space {
    margin-bottom: 150px;
  }
`;
const Team = ({ data }) => {
  return (
    <TeamWrapper>
      <NextSeo title="Team" />
      <Container maxwidth="700px">
        <h1>Team</h1>
      </Container>
      {data.teams.map((e, index) => {
        return (
          <div key={index}>
            <Container maxwidth="700px">
              <h4 className="name">{e.name}</h4>
              <p className="jobtitle">{e.jobtitle}</p>
            </Container>
            {e.image ? (
              <ImageWrapper>
                <Image
                  alt="Portrait Team"
                  objectPosition="top"
                  quality="60"
                  layout="fill"
                  objectFit="cover"
                  src={e.image.url}
                />
              </ImageWrapper>
            ) : null}
            <Container maxwidth="700px">
              {e.description ? (
                <div className="text-container space">
                  {" "}
                  <RichText content={e.description.raw} />
                </div>
              ) : null}
            </Container>
          </div>
        );
      })}
    </TeamWrapper>
  );
};

export default Team;
export const getStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
