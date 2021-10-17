import React from "react";
import { getServiceList } from "../lib/data";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Button from "../components/Button";
import media from "styled-media-query";

const ServiceWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: row;
    margin: 30px 0;

    ${media.lessThan("medium")`

flex-direction: column;

`}
  }

  .description {
    flex: 1 1 400px;
    font-weight: 300;
    font-size: 21px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    ${media.lessThan("medium")`
    flex: 1 1 auto;
padding: 30px 0;

`}
    button {
      margin-top: auto;
      align-self: flex-end;
      ${media.lessThan("medium")`
margin: 30px 0 0 0;

`}
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1 1 400px;
  height: 400px;

  .box {
    position: absolute;
    bottom: 0;
    left: 10px;
    margin: 10px;
    padding: 10px;
    background: ${({ theme }) => theme.colors.primary};

    .title {
      color: white;
      font-size: 40px;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }
`;

const Angebot = ({ data }) => {
  return (
    <ServiceWrapper>
      <Container>
        <h1>Angebot</h1>

        {data.services.map((e, index) => {
          return (
            <div key={index}>
              <div className="card" key={index}>
                <ImageWrapper>
                  <Image
                    alt="Bild Angebot"
                    layout="fill"
                    objectFit="cover"
                    src={e.images[0].url}
                  />
                  <div className="box">
                    <h4 className="title">{e.title}</h4>
                  </div>
                </ImageWrapper>

                <div className="Text-Container description">
                  {e.description}
                  <Button>
                    <Link scroll={false} href={`/angebot/${e.slug}`}>
                      Weitere Infos
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space" />
            </div>
          );
        })}
      </Container>
    </ServiceWrapper>
  );
};

export default Angebot;

export const getStaticProps = async () => {
  const data = await getServiceList();
  return {
    props: {
      data,
    },
  };
};
