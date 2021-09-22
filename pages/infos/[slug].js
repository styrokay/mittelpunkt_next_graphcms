import React from "react";
import { useRouter } from "next/router";
import { getAllNewsWithSlug, getSingleNews } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Container from "../../components/Container";

const InfoWrapper = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  height: 800px;
`;

const Info = ({ info }) => {
  {
    console.log(info);
  }
  return (
    <InfoWrapper>
      <Container maxwidth="700px">
        <h1>{info.title}</h1>
      </Container>
      {/*     <ImageWrapper>
        <Image layout="fill" objectFit="cover" src={service.images[0].url} />
      </ImageWrapper> */}
      <Container maxwidth="700px">
        <div className="text-container">
          <RichText content={info.content.json} />
        </div>
      </Container>
    </InfoWrapper>
  );
};

export default Info;

export async function getStaticProps({ params }) {
  const data = await getSingleNews(params.slug);
  return {
    props: {
      info: data.info,
    },
  };
}

export async function getStaticPaths() {
  const { infos } = await getAllNewsWithSlug();

  return {
    paths: infos.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
