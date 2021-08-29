import React from "react";
import { useRouter } from "next/router";
import { getAllServicesWithSlug, getSingleService } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
`;

const Service = ({ service }) => {
  console.log(service);
  return (
    <div>
      <h1>{service.title}</h1>
      <ImageWrapper>
        <Image layout="fill" objectFit="cover" src={service.images[0].url} />
      </ImageWrapper>
      <RichText content={service.details.json} />
    </div>
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
  console.log({ services });
  return {
    paths: services.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
