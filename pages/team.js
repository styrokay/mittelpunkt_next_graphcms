import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Image from "next/image";
import { getAboutData } from "../lib/data";
import { RichText } from "@graphcms/rich-text-react-renderer";
const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  margin: 50px 0;
`;

const TeamWrapper = styled.div`
  .name {
    font-weight: 500;
    font-size: 40px;
    margin: 10px 0;
  }
  .jobtitle {
    font-size: 30px;
    margin: 0;
  }

  .space {
    margin-bottom: 200px;
  }
`;
const Team = ({ data }) => {
  return (
    <TeamWrapper>
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
                  objectPosition="top"
                  quality="100"
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
  };
};
