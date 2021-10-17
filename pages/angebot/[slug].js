import React from "react";
import { useRouter } from "next/router";
import { getAllServicesWithSlug, getSingleService } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Container from "../../components/Container";
import media from "styled-media-query";

const ServiceWrapper = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
  margin: 30px 0;
  ${media.lessThan("medium")`
height: 300px;
`}
`;

const Service = ({ service }) => {
  console.log(service);
  return (
    <ServiceWrapper>
      <Container maxwidth="700px">
        <h1>{service.title}</h1>
      </Container>
      <ImageWrapper>
        <Image
          alt="Bild Angebot"
          layout="fill"
          objectFit="cover"
          src={service.images[0].url}
        />
      </ImageWrapper>
      <Container maxwidth="700px">
        <div className="text-container">
          <RichText content={service.details.json} />
        </div>
      </Container>
    </ServiceWrapper>
  );
};

export default Service;

export async function getStaticProps({ params }) {
  const data = await getSingleService(params.slug);
  return {
    props: {
      service: data.service,
    },
  };
}

export async function getStaticPaths() {
  const { services } = await getAllServicesWithSlug();

  return {
    paths: services.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
